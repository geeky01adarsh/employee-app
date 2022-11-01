import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Link,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  TableCell,
} from "@mui/material";
import axios from "axios";

const URL = "http://localhost:5000/employee";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function preventDefault(event) {
  event.preventDefault();
}

const deleteHandler = async (_id) => {
  await axios.delete(`http://localhost:5000/employee/${_id}`);
};



const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [reloadData, setReload] = useState(false);
  useEffect(() => {
    fetchHandler().then((data) => {
      setEmployees(data.employees);
    });
  }, [reloadData]);
    const handleDelete = (_id) => {
        deleteHandler(_id).then(() =>
        {
            console.log("Successfully Deleted Empolyee Record");
          setReload(!reloadData);}
      );
    };

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Employee Records
      </Typography>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "bold" }}
            >
              First Name
            </TableCell>
            <TableCell
              sx={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "bold" }}
            >
              Last Name
            </TableCell>
            <TableCell
              sx={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "bold" }}
            >
              Email ID
            </TableCell>
            <TableCell
              sx={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "bold" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.fname}</TableCell>
              <TableCell>{employee.lname}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "blue",
                    color: "#fff",
                    "&:hover": { color: "blue" },
                    margin: "10px",
                  }}
                  LinkComponent={NavLink}
                  to={`/viewEmployee/${employee._id}`}
                >
                  View
                </Button>

                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "red",
                    color: "#fff",
                    "&:hover": { color: "red" },
                    margin: "10px",
                  }}
                  LinkComponent={NavLink}
                  to={`/updateDetails/${employee._id}`}
                >
                  Update
                </Button>

                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "blue",
                    color: "#fff",
                    "&:hover": { color: "blue" },
                    margin: "10px",
                  }}
                  LinkComponent={Link}
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        color="primary"
        LinkComponent={NavLink}
        to={`/addEmployee`}
        sx={{ mt: 3 }}
      >
        Add More Employee Records
      </Button>
    </>
  );
};

export default Home;
