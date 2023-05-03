//@ts-nocheck
import React from "react";
import Button from "@mui/material/Button";
import { useParams,NavLink } from "react-router-dom";
import { users, User } from "../resources/Users.ts";
import { useRadioGroup } from "@mui/material";
import useForm from "../hooks/useForm.ts";
function UserScreen() {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  const [ data, handleChange ] = useForm<User>(user);
  const { name, role, address, salary } = data

  if (!user) {
    return (
      <div className="container">
        <h1> User not found</h1>
      </div>
    );
  }

  //const { name, role, address, salary } = user;
  
  return (
    <div className="container">
      <h1>Hi user here you can modify your information</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id=""
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input
          name="role"
            type="text"
            className="form-control"
            id=""
            placeholder="Enter role"
            value={role}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            id=""
            placeholder="Enter address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            name="salary"
            type="number"
            className="form-control"
            id=""
            placeholder="Enter salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
        <br></br>
        {
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        }
        <NavLink to={`/users/`} className="btn btn-danger mx-2">
          Cancel
        </NavLink>
      </form>
    </div>
  );
}

export default UserScreen;
