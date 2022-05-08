import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const UserTable = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setShowModal(true);
                    setUserId(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
      <ConfirmationModal
        show={showModal}
        onHandleClose={() => {
          setShowModal(false);
        }}
        onHandleSave={() => {
          props.deleteUser(userId);
          setShowModal(false);
        }}
      />
    </table>
  );
};

export default UserTable;
