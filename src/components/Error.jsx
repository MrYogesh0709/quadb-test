import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="container text-center mt-5">
        <div className="jumbotron">
          <h3 className="display-4">Ohh!</h3>
          <p className="lead">
            We can't seem to find the page you're looking for.
          </p>
          <p className="lead">
            <Link to="/" className="btn btn-primary btn-lg" role="button">
              Back Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h3 className="alert-heading">Something went wrong!</h3>
        <p>There was an unexpected error. Please try again later.</p>
      </div>
    </div>
  );
};

export default Error;
