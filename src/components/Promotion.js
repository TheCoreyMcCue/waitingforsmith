import { Box, Typography } from '@mui/material'
import React from 'react'



const Promotion = ({ promoBackground }) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${promoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        marginBottom: "-5%",
        paddingBottom: "5%",
        filter: `sepia(25%)`
      }} sx={{ flexGrow: 1, minHeight: "90vh" }}>
      <Typography style={{ textAlign: "center" }} color="white" variant="h2"> Promotion</Typography>
    </Box>
  )
}

export default Promotion