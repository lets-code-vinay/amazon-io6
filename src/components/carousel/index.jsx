import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      left="0"
      width="100%"
      height="100%"
     
    >
      <IconButton onClick={goToPrevious} style={{ background:"black",color: 'white', position: 'absolute', left: '10px' }}>
        <ArrowBackIos />
      </IconButton>

      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <img src={items[currentIndex]} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="carousel item" />
      </Box>

      <IconButton onClick={goToNext} style={{ background:"black",color: 'white', position: 'absolute', right: '10px' }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
