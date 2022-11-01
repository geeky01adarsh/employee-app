import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emp_id: {
    type: Number,
    required: true,
    unique: true,
  },
  contact_no: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
