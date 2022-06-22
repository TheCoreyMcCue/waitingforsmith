import * as React from "react";

import {
  FormControl,
  Card,
  Typography,
  CardHeader,
  CardMedia,
  InputLabel,
  NativeSelect,
  CardContent,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  // const navigate = useNavigate();

  console.log(
    "🚀 ~ file: ProductCard.js ~ line 28 ~ ProductCard ~ product",
    product
  );

  return (
    <Card sx={{ maxWidth: 270, minWidth: 270, margin: "1%" }}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={product.name}
        subheader={product.price.formatted_with_symbol}
      />
      <CardMedia component="img" height="194" image={product.image.url} />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {product.description.slice(3, -4)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <AddShoppingCartIcon
          onClick={() => alert("added to cart")}
          style={{ position: "relative", left: "230", top: "10" }}
        />
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Size
          </InputLabel>

          <NativeSelect defaultValue="Medium" inputProps={{}}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </NativeSelect>
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
