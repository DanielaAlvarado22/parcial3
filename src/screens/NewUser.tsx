//@ts-nocheck
import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { User, addUsers} from "../resources/Users.ts";
import{UserData} from "../resources/Users.ts"
import useForm from "../hooks/useForm.ts";
import { Info } from "@mui/icons-material";


const InfoUser: UserData = {
  name: '',
  address: '',
  salary: '',
  role: '' 
}


function NewUser() {
  const [data, handleChange] = useForm<User>(InfoUser);
  const { name, role, address, salary } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleUpdate = () => {
    addUsers(data);}


  return (
    <div className="container">
      <h3>Hi, here you can create a new user</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control w-25"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            type="text"
            className="form-control w-25"
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            name="address"
            type="text"
            className="form-control w-25"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control w-25"
            id="salary"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="mb-3">
        <button onClick={handleUpdate} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default NewUser;
