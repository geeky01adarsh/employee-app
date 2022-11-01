import express from "express";
import {
  getAllEmployees,
  addEmployees,
  getEmployeeById,
  updateEmployeeById,
  removeEmployeeById,
} from "../controllers/employee_controller.js";


const router = new express.Router();

export const employeeRoute = router.get("/", getAllEmployees);
export const addNewEmployee = router.post("/", addEmployees);

router.get("/:id", getEmployeeById);


router.put("/:id", updateEmployeeById);

router.delete("/:id", removeEmployeeById);
