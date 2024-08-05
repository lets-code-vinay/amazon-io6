import { Box, Paper } from "@mui/material";
import React from "react";

const LoginPageShimmer = () => {
  return (
    <Box sx={{ margin: "30px 0 0px 550px" }}>
      <Box
        sx={{
          height: "40px",
          width: "120px",
          //   border: "1px solid black",
          margin: "0 0 0 150px",
          backgroundColor: "rgb(74, 72, 72);",
          backgroundColor: "#ccc",
        }}
      ></Box>
      <Box>
        <Paper
          elevation={2}
          sx={{
            height: "349px",
            width: "420px",
            backgroundColor: "rgb(74, 72, 72);",
          }}
        >
          <Box
            sx={{
              height: "25px",
              width: "60px",
              //   border: "1px solid black",
              margin: "15px 0 14px 20px",
              backgroundColor: "#ccc",
            }}
          />
          <Box
            sx={{
              height: "30px",
              width: "370px",
              //   border: "1px solid black",
              margin: "0px 0 0 20px",
              backgroundColor: "#ccc",
            }}
          />
          <Box
            sx={{
              height: "30px",
              width: "370px",
              //   border: "1px solid black",
              margin: "20px 0 10px 20px",
              backgroundColor: "#ccc",
            }}
          />
          <Box
            sx={{
              height: "10px",
              width: "370px",
              //   border: "1px solid black",
              margin: "20px 0 10px 20px",
              backgroundColor: "#ccc",
            }}
          />
          <Box
            sx={{
              height: "10px",
              width: "150px",
              //   border: "1px solid black",
              margin: "0px 220px 0 20px",
              backgroundColor: "#ccc",
            }}
          />
          <Box
            sx={{
              height: "10px",
              width: "60px",
              //   border: "1px solid black",
              backgroundColor: "#ccc",
              margin: "22px 0 0 20px",
            }}
          />
          <Box
            sx={{
              height: "2px",
              width: "370px",
              //   border: "1px solid black",
              backgroundColor: "#ccc",
              margin: "15px 0 0 20px",
            }}
          />

          <Box
            sx={{
              height: "10px",
              width: "100px",
              //   border: "1px solid black",
              backgroundColor: "#ccc",
              margin: "10px 0 0 15px",
            }}
          />
          <Box
            sx={{
              height: "10px",
              width: "140px",
              //   border: "1px solid black",
              backgroundColor: "#ccc",
              margin: "20px 0 0 15px",
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
};
export default LoginPageShimmer;
