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
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <Card style={{ minWidth: "65%" }}>
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {dateInfo?.title}
          </Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {dateInfo?.place}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(dateInfo?.tourDate).toLocaleDateString("en-gb", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              window.open(dateInfo?.ticketLink, "_blank", "noopener")
            }
            size="small"
            target="_blank"
          >
            Buy Tickets
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TourDate;
