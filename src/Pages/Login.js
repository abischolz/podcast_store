/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
// import { Link } from '';

const Login = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogTitle>Log in!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Log in to access your saved preferences! Don't have an account?
          {/* <Link path="/signup"> */}
          <DialogContentText>
            Sign up and starting building your library!
          </DialogContentText>
          {/* </Link> */}
        </DialogContentText>
        <TextField label="Email Address" type="email" />

        <TextField label="Password" />
      </DialogContent>
    </Dialog>
  );
};

export default Login;
