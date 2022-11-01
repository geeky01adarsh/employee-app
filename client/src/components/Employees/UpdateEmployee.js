import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  FormControlLabel,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
    const history = useNavigate();
    const id = useParams().id;
    console.log(id);
    const [input, setInput] = useState({
        _id:"",
      fname: "",
      lname: "",
      email: "",
      contact_no: 0,
      image: "",
    });
    

    const getEmployeeDetails = async () => {
      return await axios
        .get(`http://localhost:5000/employee/${id}`)
        .then((res) => res.data);
    };
    useEffect(() => {
      getEmployeeDetails().then((data) => {
        const EmployeeDetails = data.employee;
          setInput({
            _id:EmployeeDetails._id,
          fname: EmployeeDetails.fname,
          lname: EmployeeDetails.lname,
          email: EmployeeDetails.email,
          contact_no: EmployeeDetails.contact_no,
          image: EmployeeDetails.image,
        });
      });
    }, []);
  

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const sendReq = async () => {
    await axios
      .put(`http://localhost:5000/employee/${input._id}`, {
        fname: String(input.fname),
        lname: String(input.lname),
        email: String(input.email),
        contact_no: Number(input.contact_no),
        image: String(input.image),
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!!! \nPlease try again!!!");
      })
      .then((res) => res.data)
      .then(console.log("Successfully added the book"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.contact_no >= 1000000000 && input.contact_no <= 9999999999) {
      sendReq().then(() => history("/"));
    } else {
      alert("Please enter a valid 10 digits Mobile No.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <FormLabel> First Name </FormLabel>
          <TextField
            value={input.fname}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="fname"
          />
          <FormLabel> Last Name </FormLabel>
          <TextField
            value={input.lname}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="lname"
          />
          <FormLabel> Email </FormLabel>
          <TextField
            value={input.email}
            onChange={handleChange}
            type="email"
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          />
          <FormLabel> Contact Number </FormLabel>
          <TextField
            value={input.contact_no}
            onChange={handleChange}
            type="num"
            margin="normal"
            fullWidth
            variant="outlined"
            name="contact_no"
          />
          <FormLabel> Image URL </FormLabel>
          <TextField
            value={input.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />

          <Button variant="contained" type="Submit">
            Update Employee
          </Button>
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
        </Box>
      </form>
    </>
  );
};

export default UpdateEmployee;
