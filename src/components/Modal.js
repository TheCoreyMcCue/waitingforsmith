import * as React from "react";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  height: "35%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  // paddingTop: "5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const mobileStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "30em",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  paddingTop: "5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export default function BasicModal({ isDesktop }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={isDesktop ? style : mobileStyle}>
        {isDesktop && (
          <CloseIcon
            onClick={handleClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "15px",
              right: "18px",
              color: "grey",
            }}
          />
        )}
        <Card
          sx={{ display: "flex", flexDirection: isDesktop ? "row" : "column", height: "100%" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="100%"
            sx={{ width: "100%" }}
            image="https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/237250905_3009502749262808_3553294946819976522_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=jjx7sB6OaDIAX_yJY9v&tn=XJ6TtWPEEJkapElg&_nc_ht=scontent-lhr8-2.xx&oh=00_AT92ZTDwX0NsgWa23EB16JcbH7GVnWTa1S7KB5rAWicuNg&oe=629C75F7"
          />
          <Box>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Join Our Mailing List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Let's sty in touch about what about what we're up to
              </Typography>
            </CardContent>
            <CardContent>
              <FormControl style={{ width: isDesktop ? "95%" : "95%" }}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <Button>Submit</Button>
              </FormControl>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}
