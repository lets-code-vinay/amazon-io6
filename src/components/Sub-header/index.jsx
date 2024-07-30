import React from "react";
import Box from "@mui/material/Box"
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import { MenuItem } from "@mui/material";
import "./style.css"

const SubHeader =()=>{
    return(
<>
<Box class="Sub-header">
<Menu>
    <MenuItem value="0">contact</MenuItem>
</Menu>
</Box>
</>
    );
};

export default SubHeader;