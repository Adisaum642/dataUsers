import React, { useState, useEffect } from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import EditUserForm from "./components/EditUserForm";
import DeleteConfirmation from "./components/DeleteConfirmation";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleDelete = (user) => {
    setDeleteUser(user);
  };

  const handleSave = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.email === updatedUser.email ? updatedUser : user
      )
    );
    setEditUser(null);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((user) => user.email !== deleteUser.email));
    setDeleteUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortType === "id") {
      return a.id.value.localeCompare(b.id.value);
    }
    if (sortType === "employee_name") {
      return a.name.last.localeCompare(b.name.last);
    }
    if (sortType === "employee_salary") {
      return a.location.postcode - b.location.postcode;
    }
    if (sortType === "employee_age") {
      return a.dob.age - b.dob.age;
    }
    return 0;
  });

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <SearchBar handleSearch={handleSearch} />
      <SortDropdown handleSort={handleSort} sortType={sortType} />
      <UserTable
        users={sortedUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {editUser && <EditUserForm user={editUser} handleSave={handleSave} />}
      {deleteUser && (
        <DeleteConfirmation
          user={deleteUser}
          handleCancel={() => setDeleteUser(null)}
          handleConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default App;
