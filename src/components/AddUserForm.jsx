import React from "react";
import { useForm } from "react-hook-form";
import AlertModal from "./AlertModal";
import { useState } from "react";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [userNAme, setUserNAme] = useState("");

  const onSubmit = (data, e) => {
    data.id = null;
    if (isSameUserName(data.username) === false) {
      props.addUser(data);
      e.target.reset();
      return;
    }
    setShowModal(true);
    setUserNAme(data.username);
  };

  const isSameUserName = (userName) => {
    return props.users.some((user) => {
      if (user.username === userName) {
        return true;
      }
      return false;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "Valor requerido" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "Valor requerido" },
        })}
      />
      <div>{errors?.username?.message}</div>
      <button type="submit">Add new user</button>
      <AlertModal
        show={showModal}
        username={userNAme}
        onHandleClose={() => {
          setShowModal(false);
        }}
      />
    </form>
  );
};

export default AddUserForm;
