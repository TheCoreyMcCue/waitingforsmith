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
};
const mobileStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "35em",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  paddingTop: "5%",
  display: "flex",
  flexDirection: "column",
  // alignItems: 'space-between',
  alignItems: "flex-start",
};

export default function BasicModal({ isDesktop, popUpData }) {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState(null);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    console.log(email);
  };

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
          sx={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            alt="Waiting for smith"
            height="100%"
            sx={{ width: "100%" }}
            image={popUpData[0]?.image?.fields?.file?.url}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Join Our Mailing List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Let's sty in touch about what about what we're up to
              </Typography>
            </CardContent>
            <CardContent>
              <form>
                <FormControl style={{ width: isDesktop ? "95%" : "95%" }}>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                  <Button onClick={handleSubmit}>Submit</Button>
                </FormControl>
              </form>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}
