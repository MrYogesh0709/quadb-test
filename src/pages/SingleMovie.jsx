import React, { useState } from "react";
import noImg from "../assets/no-image.jpg";
import { useLoaderData, useNavigation, Navigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { Loading, Navbar } from "../components";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  const data = await response.json();
  return { data };
};

function SingleMovie() {
  const { data } = useLoaderData();
  const { state } = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("Please login...");
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (state === "loading") {
    return <Loading />;
  }
  if (!data) return <Navigate to="/" />;

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-4 single-movie-card">
          <img
            src={data.image?.original || noImg}
            alt={data.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          {data.name && <h2>{data.name}</h2>}
          <hr />
          {data.type && <p>Type: {data.type}</p>}
          {data.language && <p>Language: {data.language}</p>}
          {data.genres && data.genres.length > 0 && (
            <p>Genres: {data.genres.join(", ")}</p>
          )}
          {data.status && <p>Status: {data.status}</p>}
          {data.runtime && <p>Runtime: {data.runtime} minutes</p>}
          {data.rating?.average && <p>Rating: {data.rating.average}</p>}
          {data.premiered && <p>Premiered: {data.premiered}</p>}
          {data.officialSite && (
            <p>
              Official Site:{" "}
              <a
                href={data.officialSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.officialSite}
              </a>
            </p>
          )}
          {data.schedule?.time && data.schedule?.days && (
            <p>
              Schedule: {data.schedule.time} on {data.schedule.days.join(", ")}
            </p>
          )}
          {data.network?.name && data.network?.country?.name && (
            <p>
              Network: {data.network.name} ({data.network.country.name})
            </p>
          )}
          {data.externals?.imdb && (
            <p>
              IMDb:{" "}
              <a
                href={`https://www.imdb.com/title/${data.externals.imdb}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb Link
              </a>
            </p>
          )}
          {data.summary && (
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.summary),
              }}
            />
          )}
          <button className="btn btn-primary mb-2" onClick={handleOpenModal}>
            Book Ticket
          </button>
        </div>
      </div>
      {/* Booking Modal */}
      <Modal
        closeModal={handleCloseModal}
        openModal={handleOpenModal}
        showModal={showModal}
        movie={data}
      />
    </div>
  );
}

export default SingleMovie;
