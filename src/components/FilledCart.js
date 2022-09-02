import React from 'react';

import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

const FilledCart = ({ cart }) => {
  return (
    <Container>
      <Grid>
        {cart?.line_items?.map((item, index) =>
          <Card key={index}>
            <CardContent>
              <Typography variant="h6" color="text.secondary">{item?.name}</Typography>
            </CardContent>
          </Card>
        )}
        <Typography>Subtotal: {cart?.subtotal?.formatted_with_symbol}</Typography>
      </Grid>
    </Container>
  )
}

export default FilledCart;
