import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

function Form() {
    return (
      <div className="container">
       <h3>Hola aqui puedes modificar los datos</h3>
       <form>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" id=""  placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label>Role</label>
    <input type="text" className="form-control" id="" placeholder="Enter role"/>
  </div>
  <div className="form-group">
    <label>Address</label>
    <input type="text" className="form-control" id=""  placeholder="Enter address"/>
  </div>
  <div className="form-group">
    <label>Salary</label>
    <input type="number" className="form-control" id="" placeholder="Enter salary"/>
  </div>
    <br></br>
 { <button type="submit" className="btn btn-primary">Submit</button>}
  <NavLink to={`/users/`} className="btn btn-danger mx-2">Cancel</NavLink>

</form>
      
      </div>
    );
  }
  
  export default Form;