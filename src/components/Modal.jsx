import React, { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ movie, closeModal, showModal }) => {
  const [formData, setFormData] = useState({
    quantity: 1,
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = () => {
    console.log("Booking ticket:", formData);
    closeModal();
    toast.success(`Wooohaa! ${formData.quantity} ticket Booked successfully`);
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Book Ticket</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              {movie.name && <h2>{movie.name}</h2>}
              <hr />
              {movie.type && <p>Type: {movie.type}</p>}
              {movie.language && <p>Language: {movie.language}</p>}
              {movie.schedule?.time && movie.schedule?.days && (
                <p>
                  Schedule: {movie.schedule.time} on{" "}
                  {movie.schedule.days.join(", ")}
                </p>
              )}
              <form>
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    min="1"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFormChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  toast.info("Book ticket  now Few seat left..");
                  closeModal();
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleBookTicket}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
