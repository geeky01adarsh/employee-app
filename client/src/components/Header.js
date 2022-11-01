import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
      <Toolbar>
        <Typography>
          <LibraryBooksOutlinedIcon />
        </Typography>
        <Typography
          sx={{ marginLeft: "10px", fontSize: "20px" }}
          LinkComponent={NavLink}
          to={`/addEmployee`}
        >
          Employee Records
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
