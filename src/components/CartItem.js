import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CartItem = ({ item, cart }) => {
  // console.log("🚀 ~ file: CartItem.js ~ line 5 ~ CartItem ~ item", item)
  return (
    <Card>
      <CardContent style={{ display: "flex" }}>
        <CardMedia
          component="img"
          alt={item?.product_name}
          style={{ height: "10%", width: "10%" }}
          image={item?.image?.url}
        />
        <div style={{ marginLeft: "3%" }}>
          <Typography variant="h6" color="text.primary">{item?.name}</Typography>
          <Typography variant="p" color="text.secindary">{item?.price?.formatted_with_symbol}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CartItem;
