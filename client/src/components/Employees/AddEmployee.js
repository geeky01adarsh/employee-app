import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useNavigate, NavLink } from "react-router-dom";

const AddEmployee = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    contact_no: 0,
    image: "",
    address: "",
    age: 0,
    department: "",
    emp_status: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
    console.log(input)
  };

  const sendReq = async () => {
    await axios
      .post("http://localhost:5000/employee", {
        fname: String(input.fname),
        lname: String(input.lname),
        email: String(input.email),
        contact_no: Number(input.contact_no),
        image: String(input.image),
        address: String(input.address),
        age: Number(input.age), emp_status: String(input.emp_status)
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
          <FormLabel> Address </FormLabel>
          <TextField
            value={input.address}
            onChange={handleChange}
            type="normal"
            margin="normal"
            fullWidth
            variant="outlined"
            name="address"
          />
          
          <FormLabel> Age </FormLabel>
          <TextField
            value={input.age}
            onChange={handleChange}
            type="num"
            margin="normal"
            fullWidth
            variant="outlined"
            name="age"
          />
          <FormLabel> Department </FormLabel>
          <TextField
            value={input.department}
            onChange={handleChange}
            type="normal"
            margin="normal"
            fullWidth
            variant="outlined"
            name="department"
          />
          <FormLabel> Employee Status </FormLabel>
          {/* <TextField
            value={input.contact_no}
            onChange={handleChange}
            type="num"
            margin="normal"
            fullWidth
            variant="outlined"
            name="contact_no"
          /> */}
          <TextField
            value={input.emp_status}
            onChange={handleChange}
            type="normal"
            margin="normal"
            fullWidth
            variant="outlined"
            name="emp_status"
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
            Add Employee
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

export default AddEmployee;
