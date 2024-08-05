import React from "react";
// import Header from "../../components/Header"
// import SubHeader from "../../components/Sub-header"
// import Footer from "../../components/Footer";

import Bedsheet from "../../assets/image/bedsheets.jpg";
import Figarines from "../../assets/image/figarines.jpg";
import Lighting from "../../assets/image/lighting.jpg";
import Air from "../../assets/image/air.jpg";
import Home from "../../assets/image/Home.jpg";
import Refrigerators from "../../assets/image/Refringeratoners.jpg";
import Microwoves from "../../assets/image/microwoves.jpg";
import Washing from "../../assets/image/washing.jpg";
import Boat from "../../assets/image/boat.jpg";
import Boult from "../../assets/image/boult.jpg";
import Noise from "../../assets/image/noise.jpg";
import Zebronics from "../../assets/image/zebronics.jpg";
import Cleoning from "../../assets/image/cleoning.jpg";
import Tyre from "../../assets/image/tyre.jpg";
import Helmets from "../../assets/image/helmets.jpg";
import Vacuum from "../../assets/image/vacuum.jpg";
import Link from "@mui/material/Link";
import Image4 from "../../assets/image/images4.jpg";
import Image from "../../assets/image/images.jpg";
import Image3 from "../../assets/image/images3.jpg";
import Image2 from "../../assets/image/image2.jpg";
import burner from "../../assets/image/single-burner.jpg";
import Stove from "../../assets/image/stove.jpg";
import Stor from "../../assets/image/stor.jpg";
import Pc from "../../assets/image/PC.jpg";
import Combo_low from "../../assets/image/Combo_low.jpg";
import Bag from "../../assets/image/bag.jpg";
import Dell from "../../assets/image/dell.jpg";
import Ezee from "../../assets/image/ezee.jpg";
import Pigcon from "../../assets/image/pigcon.jpg";
import Presto from "../../assets/image/presto.jpg";
import Slate from "../../assets/image/slate.jpg";
import Violet from "../../assets/image/violet.jpg";
import "./style.css";
import { Box, Typography } from "@mui/material";

const Homepage = () => {
  const product = [
    { id: 1, img: Image4, title: "product name", hasdata: false },
    { id: 1, img: Image, title: "product name", hasdata: false },
    { id: 1, img: Image3, title: "product name", hasdata: false },
    { id: 1, img: Image2, title: "product name", hasdata: false },
    { id: 1, img: burner, title: "product name", hasdata: false },
    { id: 1, img: Stove, title: "product name", hasdata: false },
  ];
  const product6 = [
    { id: 1, img: Pigcon, title: "product name", hasdata: false },
    { id: 1, img: Ezee, title: "product name", hasdata: false },
    { id: 1, img: Dell, title: "product name", hasdata: false },
    { id: 1, img: Presto, title: "product name", hasdata: false },
    { id: 1, img: Slate, title: "product name", hasdata: false },
    { id: 1, img: Violet, title: "product name", hasdata: false },
  ];
  const product2 = [
    {
      img: Stor,
      title: "product name",
      hasdata: false,
    },
  ];
  const product3 = [
    {
      img: Pc,
      title: "product name",
      hasdata: false,
    },
  ];
  const product4 = [
    {
      img: Bag,
      title: "product name",
      hasdata: false,
    },
  ];
  const product5 = [
    {
      img: Combo_low,
      title: "product name",
      hasdata: false,
    },
  ];

  return (
    <>
      {/* <Header/> */}
      {/* <SubHeader/> */}
      <Box className="boxSection-parent">
        <Box className="box-section">
          <Box className="box1 box">
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                <Typography variant="h5">Revamp your home in style</Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box-2">
                <img src={Bedsheet} alt="Bedsheet" width={141.5} height={130} />
              </Box>
              <Box className="child-box-2">
                <img src={Lighting} alt="Lighting" width={141.5} height={130} />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Cushion covers, bedsheets & more
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Lighting solutionss
                </Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box-2">
                <img
                  src={Figarines}
                  alt="Figarines"
                  width={141.5}
                  height={130}
                />
              </Box>
              <Box className="child-box-2">
                {" "}
                <img src={Home} alt="Home" width={141.5} height={130} />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Figarines, vases & more
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Home storage
                </Typography>
              </Box>
            </Box>
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                <Link href="#" underline="none">
                  {"Explore all"}
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="box2 box">
            <Box className="h-section-parent">
              <Box className="heading-section-2">
                {" "}
                <Typography variant="h5">
                  Appliances for your home | Up to 55% off
                </Typography>
              </Box>
            </Box>{" "}
            <Box className="childBox-parent">
              <Box className="child-box">
                {" "}
                <img src={Air} alt="Air" width={141.5} height={115} />
              </Box>
              <Box className="child-box">
                {" "}
                <img
                  src={Refrigerators}
                  alt="Refrigerators"
                  width={141.5}
                  height={115}
                />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Air conditioners{" "}
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Refringerators
                </Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box">
                {" "}
                <img
                  src={Microwoves}
                  alt="Microwoves"
                  width={141.5}
                  height={115}
                />
              </Box>
              <Box className="child-box">
                {" "}
                <img src={Washing} alt="Washing" width={141.5} height={115} />
              </Box>
            </Box>{" "}
            <Box className="childBox-parent">
              <Box className="name-section">
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Microwaves
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Washing machines
                </Typography>
              </Box>
            </Box>
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                <Link href="#" underline="none">
                  {"See all"}
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="box3 box">
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                {" "}
                <Typography variant="h5">Starting ₹149 | Headphones</Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box-2">
                {" "}
                <img src={Boat} alt="boat" width={141.5} height={130} />
              </Box>
              <Box className="child-box-2">
                {" "}
                <img src={Boult} alt="boult" width={141.5} height={130} />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Starting Rs.299|boAt
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Starting Rs.399|boult
                </Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box-2">
                {" "}
                <img src={Noise} alt="Noise" width={141.5} height={130} />
              </Box>
              <Box className="child-box-2">
                {" "}
                <img
                  src={Zebronics}
                  alt="Zebronics"
                  width={141.5}
                  height={130}
                />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Starting Rs.649|Noise
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Starting Rs.149|zebronics
                </Typography>
              </Box>
            </Box>
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                <Link href="#" underline="none">
                  {"See all offers"}
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="box4 box">
            <Box className="h-section-parent">
              <Box className="heading-section-2">
                {" "}
                <Typography variant="h5">
                  Automotive essentials | Up to 60% off
                </Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box">
                {" "}
                <img src={Cleoning} alt="Cleoning" width={141.5} height={115} />
              </Box>
              <Box className="child-box">
                {" "}
                <img src={Tyre} alt="Tyre" width={141.5} height={115} />
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Cleaning accessories
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Tyres rim care
                </Typography>
              </Box>
            </Box>
            <Box className="childBox-parent">
              <Box className="child-box">
                {" "}
                <img src={Helmets} alt="Helmets" width={141.5} height={115} />
              </Box>
              <Box className="child-box">
                {" "}
                <img src={Vacuum} alt="Vacuum" width={141.5} height={115} />
              </Box>
            </Box>{" "}
            <Box className="childBox-parent">
              <Box className="name-section">
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Helmets
                </Typography>
              </Box>
              <Box className="name-section">
                {" "}
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  {" "}
                  Vacuum cleaner
                </Typography>
              </Box>
            </Box>
            <Box className="h-section-parent">
              <Box className="heading-section-1">
                <Link href="#" underline="none">
                  {"See more"}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <>
          <Box
            sx={{ backgroundColor: "white", width: "97%", marginLeft: "24px" }}
          >
            <Typography variant="h5" sx={{ margin: "0px 0 0 20px" }}>
              Related to items you've viewed{" "}
              <Typography variant="p" fontSize={15} sx={{ marginLeft: "10px" }}>
                <Link href="#" underline="none">
                  {"See all "}
                </Link>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "auto",
              // backgroundColor: " rgb(226, 237, 244)",
              height: "250px",
              width: "97%",
            }}
          >
            <Box className="product-container">
              {product.map((ele, index) => {
                return (
                  <>
                    <Box className="product">
                      <img src={ele?.img} alt="dummy" />
                      {/* <Typography variant="body1">title</Typography> */}
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
          {/* <Box */}
          {/* sx={{
            margin: "-80px 0 250px 0",
            backgroundColor: "red",
            height: "420px",
          }}
        >
          <Box className="product-container-2">
            {product2.map((ele, index) => {
              return (
                <>
                  <Box className="product-2">
                    <img src={ele?.img} alt="dummy" className="image" />
                  </Box>
                </>
              );
            })}
          </Box> */}
          {/* </Box> */}
          <Box
            sx={{
              display: "flex",
              margin: "60px 0 0 20px",
              // border: "1px solid black",
              height: "450px",
              width: "97%",
              backgroundColor: "white",
            }}
          >
            <Box className="image">
              <Typography variant="h5">
                {" "}
                Starting ₹99 | Start your fitness journey
              </Typography>
              {product2.map((ele, index) => {
                return (
                  <>
                    <img src={ele?.img} alt="dummy" className="image2" />
                    {/* <Typography variant="body1">title</Typography> */}
                  </>
                );
              })}{" "}
              <Link href="#" underline="none">
                {"See more"}
              </Link>
            </Box>
            <Box className="image">
              <Typography variant="h5">
                Up to 60% off | Car, bike parts & accessories
              </Typography>
              {product3.map((ele, index) => {
                return (
                  <>
                    <img src={ele?.img} alt="dummy" className="image2" />
                    {/* <Typography variant="body1">title</Typography> */}
                  </>
                );
              })}
              <Link href="#" underline="none">
                {"Explore more"}
              </Link>
            </Box>
            <Box className="image">
              <Typography variant="h5">
                Up to 50% off | International brands
              </Typography>
              {product4.map((ele, index) => {
                return (
                  <>
                    <img src={ele?.img} alt="dummy" className="image2" />
                    {/* <Typography variant="body1">title</Typography> */}
                  </>
                );
              })}
              <Link href="#" underline="none">
                {"See all offers"}
              </Link>
            </Box>
            <Box className="image">
              <Typography variant="h5">
                Up to 80% off | International brands
              </Typography>
              {product5.map((ele, index) => {
                return (
                  <>
                    <img src={ele?.img} alt="dummy" className="image2" />
                    {/* <Typography variant="body1">title</Typography> */}
                  </>
                );
              })}
              {/* <link href="#" underline="none">
              {"See all"}
            </link> */}
              <Link href="#" underline="none">
                {"See more"}
              </Link>
            </Box>
          </Box>
          <Box
            sx={{ backgroundColor: "white", width: "97%", marginLeft: "24px" }}
          >
            <Typography variant="h5" sx={{ margin: "60px 0 0 18.5px" }}>
              Best Sellers in Home & Kitchen{" "}
              <Typography variant="p" fontSize={15} sx={{ marginLeft: "10px" }}>
                <Link href="#" underline="none">
                  {"See all "}
                </Link>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "auto",
              backgroundColor: " rgb(226, 237, 244)",
              height: "270px",
              width: "97%",
            }}
          >
            <Box className="product-container-1">
              {product6.map((ele, index) => {
                return (
                  <>
                    <Box className="product">
                      <img src={ele?.img} alt="dummy" />
                      {/* <Typography variant="body1">title</Typography> */}
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
        </>
        <Box
          sx={{
            height: "100px",
            width: "100%",
            // border: "1px solid black",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              border: "1px solid grey",
              height: "120px",
              width: "100%",
              margin: "20px 0 0 0",
            }}
          >
            <Typography variant="h6" sx={{ margin: "10px 0 20px 20px" }}>
              Your recently viewed items and featured recommendations
            </Typography>
            <Typography variant="p" sx={{ margin: "0px 0 0 20px" }}>
              After viewing product detail pages, look here to find an easy way
              to navigate back to pages you are interested in
              <Box
                sx={{
                  height: "20px",
                  width: "150px",
                  margin: "-30px 0 20px 85%",
                }}
              >
                <Link href="#" underline="none">
                  {"› View or edit your browsing history"}
                </Link>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default Homepage;
