import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputLabel, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  height: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  paddingTop: "5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const mobileStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  height: "30%",
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
  const [open, setOpen] = React.useState(true);
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
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          style={{ paddingBottom: "5%" }}
        >
          Join our Mailing List
        </Typography>
        <Typography variant="p" style={{ paddingBottom: "5%" }}>
          Let me bring you some extra food for the soul from time to time And a
          big welcome to the Sam Way music family.
        </Typography>
        <Typography variant="p" style={{ paddingBottom: "5%" }}>
          And a big welcome to the Sam Way music family.
        </Typography>
        <FormControl style={{ width: isDesktop ? "40%" : "95%" }}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Button>Submit</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
