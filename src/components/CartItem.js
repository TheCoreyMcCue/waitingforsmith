import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, cart }) => {
  // console.log("🚀 ~ file: CartItem.js ~ line 5 ~ CartItem ~ item", item)
  return (
    <Card>
      <CardContent >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardMedia
            component="img"
            alt={item?.product_name}
            style={{ height: "10vh", display: "flex", width: "10vw", objectFit: "cover", border: "1px solid grey" }}
            image={item?.image?.url}
          />

          <Typography variant="h6" color="text.primary">{item?.name}</Typography>
          <Typography variant="p" color="text.secindary">{item?.price?.formatted_with_symbol}</Typography>

          <div>
            <Button color="error" variant="outlined"><DeleteIcon /></Button>
          </div>
        </div>
      </CardContent>
    </Card >
  )
}

export default CartItem;
