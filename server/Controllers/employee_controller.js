import Employee from "../model/employee_model.js";

const emp_ids = new Set();

export const getAllEmployees = async (req, res, next) => {
  let employees;
  try {
    employees = await Employee.find();
  } catch (err) {
    console.log(err);
  }

  if (!employees) {
    return res.status(404).json({ message: "No employees found" });
  }
  return res.status(200).json({ employees });
};

export const getEmployeeById = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let employee;
  try {
    employee = await Employee.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  } else {
    return res.status(201).json({ employee });
  }
};

export const addEmployees = async (req, res, next) => {
  let employee;
  console.log(req.body);
  const { fname, lname, email, contact_no, image } = req.body;
  let emp_id;
  do {
    emp_id = Math.floor(Math.random() * 90000) + 10000;
  } while (emp_ids.has(emp_id));
    emp_ids.add(emp_id);
  try {
    employee = new Employee({
      fname,
      lname,
      email,
      emp_id,
      contact_no,
      image,
    });
    await employee.save();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!employee) {
    return res.status(500).json({ message: "Unable to add the employee" });
  }
  return res.status(201).json({ employee });
};

export const updateEmployeeById = async (req, res, next) => {
  const id = req.params.id;
  const { fname, lname, email, contact_no, image } = req.body;
  let employee;
  try {
    employee = await Employee.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
      contact_no,
      image,
    });
    employee = await employee.save();
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(404).json({ message: "NO SUCH EMPLOYEE FOUND" });
  }
  return res.status(200).json({ employee });
};

export const removeEmployeeById = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
  } else {
    res.status(200).json({ message: "EMPLOYEE SUCCESSFULLY REMOVED" });
  }
};
