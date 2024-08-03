import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import SubHeader from "../../components/Sub-header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./style.css";
import { Box } from "@mui/material";

const ProductPage = (props) => {
  const [pData, setPdata] = useState([]);

  const fetchProductdata = async () => {
    try {
      const api = `https://dummyjson.com/products?limit=200`;
      const response = await axios.get(api);
      console.log("--response", response);
      const { status, data } = response || {};
      if (status === 200) {
        setPdata(data.products); // Update this line to access the products array
      }
    } catch (err) {
      console.error("--error while fetching list of countries", err);
    }
  };

  useEffect(() => {
    fetchProductdata();
  }, []);

  console.log("--pData", pData);

  return (
    <>
      <Header />
      <SubHeader />
      <Box className="product-section">
        {pData.map((product, index) => (
          <ProductCard 
            key={index} 
            image={product.thumbnail} 
            title={product.title} 
            images={product.images} 
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
