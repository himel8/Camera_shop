import {
  Alert,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [successAdmin, setSuccessAdmin] = useState(false);
  const [isLoding, SetIsloding] = useState(false);
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  const handleAdmin = (e) => {
    SetIsloding(true);
    const user = { email };
    fetch("https://lit-falls-18743.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        SetIsloding(false);
        if (data.acknowledged) {
          setSuccessAdmin(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Make an Admin
      </Typography>
      {!isLoding && (
        <form onSubmit={handleAdmin}>
          <TextField
            sx={{ width: "60%", mb: 2 }}
            onBlur={handleBlur}
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            sx={{ width: "60%", mt: 2, py: 1 }}
            type="submit"
            variant="contained"
          >
            Make Admin
          </Button>
        </form>
      )}
      {isLoding && <CircularProgress />}
      {successAdmin && (
        <Alert severity="success">Admin added successfully</Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
