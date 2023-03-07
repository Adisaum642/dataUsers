import React from "react";
import "../styles/DeleteConfirmation.css";

function DeleteConfirmation({ user, handleCancel, handleConfirm }) {
  return (
    <div className="DeleteConfirmation">
      <p>
        Are you sure you want to delete {user.name.title} {user.name.first}{" "}
        {user.name.last}?
      </p>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
}

export default DeleteConfirmation;
