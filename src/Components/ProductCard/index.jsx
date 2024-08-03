import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DefaultImage from "../../assets/images/default.png"
import "./style.css"

const ProductCard =(props)=>{
  return(
    <>
    <Card sx={{ maxWidth: 230, margin:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props?.images || {DefaultImage}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">{props?.title}
            
          </Typography>
          <Typography variant="body2" color="text.secondary"><strong>Price</strong> {props?.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            
            {props?.rating}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  
);

};

export default ProductCard;