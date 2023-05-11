//@ts-nocheck
import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import { useParams,NavLink } from "react-router-dom";
import { users, User } from "../resources/Users.ts";
import { getUser, UserData, updateUsers} from "../resources/Users.ts";
import useForm from "../hooks/useForm.ts";

const AllUsers = async (setData,setUser, id) => {
  const UserData = await getUser(id)
  setUser(UserData);
  setData(UserData);


}

const InfoUser: UserData = {
  name: '',
  address: '',
  salary: '',
  role: '' 
}

function UserScreen() {
  const { id } = useParams();
  const [user, setUser] = useState<UserData>(InfoUser)
  useEffect(() => {
    AllUsers(setData,setUser, id)
  }, [])

  const [ data, handleChange, setData ] = useForm<User>(user);
  const { name, role, address, salary } = data

  if (!user) {
    return (
      <div className="container">
        <h1> User not found</h1>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleUpdate = () => {
    updateUsers(id, data);
  }

  //const { name, role, address, salary } = user;
  
  return (
    <div className="container">
      <h1>Hi user here you can modify your information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control w-25"
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
            className="form-control w-25"
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
            className="form-control w-25"
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
            className="form-control w-25"
            id=""
            placeholder="Enter salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
        <br></br>
        {
          <button onClick={handleUpdate} className="btn btn-primary">
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
