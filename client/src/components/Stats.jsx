import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
const URL = "http://localhost:5000/employee";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Stats = () => {

  let data = [
    { name: "Full-Time", employees: 0 },
    { name: "Freelancer", employees: 0 },
    { name: "Contract", employees: 0 },
    { name: "Internship", employees: 0 },
  ];
  const [employees, setEmployees] = useState([]);
  const [reloadData, setReload] = useState(false);
  useEffect(() => {
     fetchHandler().then((data) => {
      setEmployees(data.employees)
    });
    
    
  }, [reloadData]);

  employees?.map(({emp_status}) => {
    // console.log(emp)
    if (emp_status === "full-time") data[0].employees++;
    else if (emp_status === "freelancer") data[1].employees++;
    else if (emp_status === "contract") data[2].employees++;
    else if (emp_status === "internship") data[3].employees++;
  });
  return (
    <Box>
      <BarChart
        width={500}
        height={300}
        data={data}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5
        // }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="employees" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </Box>
  );
};

export default Stats;
