import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { Box } from "@mui/material";
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

const deleteHandler = async (_id) => {
  await axios.delete(`http://localhost:5000/employee/${_id}`);
};

const Employee = () => {
  const history = useNavigate();
  const id = useParams().id;
  console.log(id);
    const [employee, setEmployee] = useState({
      _id:"",
    fname: "",
    lname: "",
    email: "",
    contact_no: 0,
    emp_id: 0,
    image: "",
  });
    const handleDelete = (_id) => {
      deleteHandler(_id).then(() => {
        console.log("Successfully Deleted Empolyee Record");
        history('/');
      });
    };

  const getEmployeeDetails = async () => {
    return await axios
      .get(`http://localhost:5000/employee/${id}`)
      .then((res) => res.data);
  };
  useEffect(() => {
    getEmployeeDetails().then((data) => {
      const EmployeeDetails = data.employee;
        setEmployee({
            _id: EmployeeDetails._id,
        fname: EmployeeDetails.fname,
        lname: EmployeeDetails.lname,
        email: EmployeeDetails.email,
        contact_no: EmployeeDetails.contact_no,
        emp_id: EmployeeDetails.emp_id,
        image: EmployeeDetails.image,
      });
    });
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={600}
        alignContent={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        marginLeft="auto"
        marginRight={"auto"}
        marginTop={"5rem"}
      >
        <Table size="medium">
          <TableBody>
            {employee.image ? (
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <img src={employee.image} alt="" width="100px" />
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ) : (
              console.log("No image found")
            )}
            <TableRow>
              <TableCell>Employee Id</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.emp_id} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.fname} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.lname} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-mail id</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.email} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Contact Number</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.contact_no} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Contact Number</TableCell>
              <TableCell></TableCell>
              <TableCell>{employee.contact_no} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "blue",
                    color: "#fff",
                    "&:hover": { color: "blue" },
                  }}
                  LinkComponent={NavLink}
                  to={`/`}
                >
                  Back
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "red",
                    color: "#fff",
                    "&:hover": { color: "red" },
                  }}
                  LinkComponent={NavLink}
                  to={`/updateDetails/${employee._id}`}
                >
                  Update
                </Button>
              </TableCell>

              <TableCell>
                <Button
                  sx={{
                    mt: "auto",
                    backgroundColor: "blue",
                    color: "#fff",
                    "&:hover": { color: "blue" },
                  }}
                  LinkComponent={Link}
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default Employee;
