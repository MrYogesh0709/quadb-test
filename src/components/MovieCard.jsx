import React from "react";
import { Link } from "react-router-dom";
import noImg from "../assets/no-image.jpg";

const MovieCard = ({ show }) => {
  const imageUrl = show.show.image?.original || noImg;

  return (
    <Link
      to={`/show/${show.show.id}`}
      className="card custom-card h-100 text-decoration-none shadow"
    >
      <img
        src={imageUrl}
        alt={show.show.name}
        className="card-img-top img-fluid rounded-start h-75"
      />
      <div className="card-body">
        <h5 className="card-title">{show.show.name}</h5>
        <p className="card-text text-muted">{show.show.genres?.join(", ")}</p>
        <p className="card-text">Status: {show.show.status}</p>
        <p className="card-text">
          Rating: {show.show.rating?.average || "N/A"}
        </p>
        <p className="card-text">Language: {show.show.language}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
