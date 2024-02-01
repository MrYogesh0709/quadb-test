import React from "react";
import MovieCard from "../components/MovieCard";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { Loading, Navbar } from "../components";
import SearchBar from "../components/SearchBar";

//? info => i can use react-tanstack-query with loader will be super fast + cache will be super fast  but it is not required or mentioned
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "all";
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  const data = await response.json();
  return { data, searchTerm };
};

const Home = () => {
  const { data, searchTerm } = useLoaderData();
  const { state } = useNavigation();
  const filteredShows = data?.filter(
    (show) => show?.show?.status !== "In Development"
  );

  if (state === "loading") {
    return <Loading />;
  }
  return (
    <div className="container my-2">
      <Navbar />
      <SearchBar search={searchTerm} />
      {filteredShows?.length === 0 ? (
        <section className="text-center mt-2">
          <p className="display-4 mb-4">No shows found</p>
          <p className="lead">Explore more shows by checking back later!</p>
          <Link to="/" className="btn btn-primary mt-3">
            Go Home
          </Link>
        </section>
      ) : (
        <section className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          {filteredShows?.map((show) => (
            <div
              key={show.show.id}
              className="col mb-4 movie-card"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <MovieCard show={show} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
