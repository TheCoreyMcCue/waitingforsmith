import * as React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  // const navigate = useNavigate();

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
      <Box>
        <CardActions
          disableSpacing
          style={{ display: "flex", justifyContent: "space-between" }}
        >
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
          <IconButton
            onClick={() => onAddToCart(product.id, 1)}
            style={{ color: "gray", minHeight: "3em" }}
          >
            <AddShoppingCartIcon style={{ marginBottom: "-10" }} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
