import React from "react";
import "../styles/UserTable.css";

function UserTable({ users, handleEdit, handleDelete }) {
  return (
    <div className="UserTable">
      <div className="row header">
        <div className="cell box">ID</div>
        <div className="cell box">Employee Name</div>
        <div className="cell box">Employee Salary</div>
        <div className="cell box">Employee Age</div>
        <div className="cell box">Employee Gender</div>
        <div className="cell box">Action</div>
      </div>
      {users.map((user) => (
        <div className="row" key={user.email}>
          <div className="cell">{user.id.value}</div>
          <div className="cell">
            {user.name.first} {user.name.last}
          </div>
          <div className="cell">{user.location.postcode}</div>
          <div className="cell">{user.dob.age}</div>
          <div className="cell">{user.gender}</div>
          <div className="cell">
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserTable;
