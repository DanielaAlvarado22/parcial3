//@ts-nocheck
import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { users } from "../resources/Users.ts";
import { deleteUsers, getUsers } from "../resources/Users.ts";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import '../App.css'

const AllUsers = async (setUser, id) => {
  const UserData = await getUsers(id)
  setUser(UserData);
}




function UsersScreen() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    AllUsers(setUsers)
  }, [])
  const handleDelete = (id: string) => {
    deleteUsers(id)
    AllUsers(setUsers)
  }
  return (
    <Container>
      <Grid container spacing={2} marginTop={3}>
        <Grid container>
          <Grid item lg={3} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={6} md={8} sm={10} xs={12}>
            <Typography variant="h4" gutterBottom align="center">
              Holi estas en usuarios
              <Divider color="black" />
            </Typography>
          </Grid>
          <Divider />
        </Grid>
        <div className="divCentrar">
        {/* <Button variant="contained" >Create new user </Button> */}
        <NavLink to={`/newUser/`} className="btn btn-primary mx-2">Create new user</NavLink>
        </div>
        
        <Grid container marginTop={2}>
          <Grid item lg={2} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={8} md={8} sm={10} xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Role</TableCell>
                    <TableCell align="center">Salary</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user: QueryDocumentSnapshot<DocumentData>) => {
                    const { name, address, role, salary } = user.data();
                    const { id } = user;
                    return (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{id}</TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="center">{address}</TableCell>
                      <TableCell align="center">{role}</TableCell>
                      <TableCell align="center">{salary}</TableCell>
                      <TableCell align="center">
                        <NavLink
                          to={`/users/${id}`}
                          className="btn btn-success mx-2"
                        >
                          Edit
                        </NavLink>
                        <button
                          onClick={() => {handleDelete(id)}}
                          className="btn btn-danger mx-2"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UsersScreen;
