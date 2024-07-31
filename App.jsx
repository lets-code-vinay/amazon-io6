import React from "react";
import Carousel from "./src/components/carousel";
import { Container } from '@mui/material';

const App = () => {
 
const images = [
  'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/2024/july/low-asp/hero/Unrec_PC30002._CB567311254_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/July/Olympics/GW/Hero/Unrec/Updated/3000x1200_3._CB567762364_.png',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/2024/july/low-asp/hero/Unrec_PC30002._CB567311254_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/July/Olympics/GW/Hero/Unrec/Updated/3000x1200_3._CB567762364_.png',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/May/Budget/PC_Hero_3000x1200_BS_PC._CB558386585_.jpg',
];

  return (
    <Container>
     <Carousel items={images} />
    </Container>
  );
};


export default App;
