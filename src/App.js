import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import { v4 as uuidv4 } from "uuid";
import EdiUserForm from "./components/EditUserForm";

function App() {
  
  let localStorageuser = localStorage.getItem("user");
  let parseUsers = JSON.parse(localStorageuser);
  const [users, setUsers] = useState(parseUsers);
  localStorage.setItem("user", JSON.stringify(users));

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1 className="mt-5">CRUD App with Hooks</h1>
      <hr />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EdiUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              {/* {console.log("localStorage: " + localStorage.getItem("user"))} */}
              <AddUserForm addUser={addUser} users={users} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
