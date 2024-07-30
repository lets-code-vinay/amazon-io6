import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./FooterBasic.css";
const FooterBasic = () => {
  return (
    <Box sx={{ margin: "25px 0 0 0" }}>
      <Divider />
      <Box className="condition">
        <Link href="#" underline="hover">
          {"Conditions of Use"}
        </Link>
        <Link href="#" underline="hover" sx={{ margin: "0 0 0px 40px" }}>
          {"Police Notice "}
        </Link>
        <Link href="#" underline="hover" sx={{ margin: "0 0 0px 40px" }}>
          {"Help"}
        </Link>
        <Box sx={{ margin: "20px 0 0 0" }}>
          <Typography variant="p">
            (c)1996-2024,Amazon.com,Inc, or its affiliates
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FooterBasic;
