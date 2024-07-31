import React from "react";
import { Box, Divider, Typography } from "@mui/material";
// import Divider from "@mui/material";
// import Typography from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
// import TextField from "@mui/material/TextField";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { styled } from "@mui/material/styles";

import { amber } from "@mui/material/colors";

import AmazonLogo from "../../Assets/Logo/amazon.jpg";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
// import theme from "../../../theme";

const Login_page = () => {
  const navigate = useNavigate();
  // const DemoPaper = styled(Paper)(({ theme }) => ({
  //   width: 380,
  //   height: 340,

  //   padding: theme.spacing(2),
  //   ...theme.typography.body2,
  //   textAlign: "center",
  // }));
  const HandleYourCreateAccount = () => {
    // console.log("handleyourcreat");
    navigate("/signup");
  };
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={8}>
        <Box className="font">
          <Box className="logo">
            <img src={AmazonLogo} alt="AmazonLogo" height={40} width={120} />
          </Box>
          <Box>
            <Box>
              <Paper elevation={2} sx={{ height: "350px", width: "420px" }}>
                <Typography sx={{ margin: "5px 0 14px 20px" }} variant="h5">
                  {" "}
                  Sign in
                </Typography>
                <Typography variant="p" sx={{ margin: "0px 0 0 20px" }}>
                  Email or Mobile Phone Number
                </Typography>

                <Box>
                  <input className="input" />
                </Box>
                <Box>
                  <Button
                    variant="text"
                    sx={{
                      background: amber[400],
                      margin: "20px 0 10px 20px",
                      width: "380px",
                      color: "black",
                    }}
                  >
                    {" "}
                    Continue
                  </Button>
                </Box>
                <Typography component="span" sx={{ margin: "0 0 0 20px" }}>
                  By continuing, you agree to Amazon's{" "}
                  <Link href="#" variant="condition">
                    {"conditions of"}
                  </Link>
                </Typography>
                <Box sx={{ margin: "0px 220px 0 20px" }}>
                  <Link href="#" variant="use">
                    {"Use"}
                  </Link>
                  <Typography component="span"> and </Typography>
                  <Link href="#" variant="privacy">
                    {"Privacy Notice."}
                  </Link>
                </Box>
                <Typography
                  component="span"
                  sx={{ display: "flex", margin: "22px 0 0 20px" }}
                >
                  <ArrowRightIcon />
                  <Link href="#" variant="Need help">
                    {"Need help?"}
                  </Link>
                </Typography>
                <Divider sx={{ margin: "15px 0 0 20px", width: "380px" }} />
                <Box className="work">Buying for work?</Box>
                <Box className="shop-link">
                  <Link href="#" variant="privacy">
                    {"Shop on Amazon Business"}
                  </Link>
                </Box>
                {/* </DemoPaper>
            </Stack> */}
              </Paper>
            </Box>
            <Divider
              sx={{ margin: "10px 0 0 15px", fontSize: "15px", width: "380px" }}
            >
              New to Amazon?
            </Divider>
            <Button
              variant="text"
              sx={{
                margin: "20px 0 0 15px",
                width: "380px",
                background: "none",
                // background: amber[400],
                color: "black",
                // backgroundColor: theme.palette.amber.main,
                border: "1px solid rgb(211,211,211)",
              }}
              onClick={HandleYourCreateAccount}
            >
              Create your Amazon Account
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login_page;
