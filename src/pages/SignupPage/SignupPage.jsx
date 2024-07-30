import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const SignupPage = () => {
  return (
    <Box>
      <Box sx={{ margin: "100px 0 0  600px" }}>
        <Typography variant="h5">Welcome</Typography>
        <Paper elevation={2} sx={{ height: "430px", width: "320px" }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            <input type="radio" /> Create account New to Amazon?
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            First and Last Name
          </Typography>
          <TextField type="text" size="small" />
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Mobile no or Email number
          </Typography>
          <TextField type="text" size="small" />
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Create a Password
          </Typography>

          <TextField
            id="outlined-password-input"
            // label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
          />
          <Box>
            <input type="checkbox" />
            <Typography variant="p">Show Password</Typography>
          </Box>
          <Button>Continue</Button>
          <Box>
            <Typography component="span">
              By continuing, you agree to Amazon's{" "}
              <Link href="#" variant="condition">
                {"conditions of use"}
              </Link>
              <Typography component="span"> and </Typography>
              <Link href="#" variant="privacy">
                {"Privacy Notice."}
              </Link>
            </Typography>
          </Box>
          <Divider />
          <Box className="work">Buying for work?</Box>
          <Box className="shop-link">
            <Link href="#" underline="none">
              {"Create a free business account"}
            </Link>
          </Box>
          <Box
            sx={{ height: "45px", width: "100%", border: "1px solid black" }}
          >
            <Typography variant="p">
              <input type="radio" />
              Sign in Already a customer?
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default SignupPage;
