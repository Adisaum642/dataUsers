import React, { useState } from "react";
import "../styles/EditUserForm.css";

function EditUserForm({ user, handleSave }) {
  const [name, setName] = useState(user.name.first);
  const [salary, setSalary] = useState(user.location.postcode);
  const [age, setAge] = useState(user.dob.age);
  const [gender, setGender] = useState(user.gender);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      name: { ...user.name, first: name },
      salary,
      age,
      gender
    };
    handleSave(updatedUser);
  };

  return (
    <div className="EditUserForm">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditUserForm;
