import React from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty, isDesktop, setLoading }) => {

  const updateCart = async (id, event) => {
    setLoading(true)
    await handleUpdateCartQty(id, event)
    setLoading(false)
  }
  const deleteItem = async (id) => {
    setLoading(true)
    await handleRemoveFromCart(id)
    setLoading(false)
  }
  return (
    <Card style={{ marginBottom: "2%" }}>
      <CardContent >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardMedia
            component="img"
            alt={item?.product_name}
            style={{ height: "10vh", display: "flex", width: "10vw", objectFit: "cover", border: "1px solid grey" }}
            image={item?.image?.url}
          />

          <Typography variant="h6" color="text.primary" marginLeft={1} style={{ textAlign: "center", margin: "auto" }}>{item?.name}</Typography>
          {isDesktop &&
            <Typography style={{ textAlign: "center", margin: "auto" }} variant="p" color="text.secindary">{item?.price?.formatted_with_symbol}</Typography>
          }
          <CardActions>
            <Box >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item.quantity}
                  label="Quantity"
                  onChange={(event) => updateCart(item.id, event.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div>
              <Button color="error" variant="outlined" onClick={() => deleteItem(item.id)}><DeleteIcon /></Button>
            </div>
          </CardActions>
        </div>
      </CardContent >
    </Card >
  )
}

export default CartItem;
