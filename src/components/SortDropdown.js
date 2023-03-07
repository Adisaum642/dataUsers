import React from "react";
import "../styles/SortDropdown.css";
import PropTypes from "prop-types";

function SortDropdown({ handleSort, sortType }) {
  return (
    <div className="SortDropdown">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortType} onChange={handleSort}>
        <option value="">--Select--</option>
        <option value="id">ID</option>
        <option value="employee_name">Employee Name</option>
        <option value="employee_salary">Employee Salary</option>
        <option value="employee_age">Employee Age</option>
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  sortType: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired
};

export default SortDropdown;
