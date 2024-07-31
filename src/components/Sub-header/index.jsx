import React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material";
import { MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"

const SubHeader =()=>{
    return(
<>

<Box class="Sub-header">
<Typography className="Menu-icon"><MenuIcon/>All</Typography>
    <Typography>Fresh</Typography>
    <Typography>Amazon MiniTV</Typography>
    <Typography>Sell</Typography>
    <Typography>Best Sellers</Typography>
    <Typography>Today's Deals</Typography>
    <Typography>Mobiles</Typography>
    <Typography>Prime</Typography>
    <Typography>Customer Services</Typography>
    <Typography>Electorinces</Typography>
</Box>

</>
    );
};

export default SubHeader;