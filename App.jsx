import React from "react";

import { Container } from '@mui/material';
import Carousel from "./src/components/Carousel";
import { CAROUSEL_IMAGES } from "./src/configs/imageContainer";


const App = () => {
 

  return (
    <Container>
     <Carousel  items={CAROUSEL_IMAGES} />
    </Container>
  );
};


export default App;
