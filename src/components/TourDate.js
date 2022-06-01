import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TourDate = ({ dateInfo }) => {
  console.log(dateInfo);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2%",
      }}
    >
      <Card style={{ minWidth: "75%" }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {dateInfo.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(dateInfo.tourDate).toLocaleDateString("en-gb", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TourDate;
