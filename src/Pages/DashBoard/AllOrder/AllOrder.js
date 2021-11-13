import { Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
const orderActions = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Shiped",
    label: "Shiped",
  },
];
const AllOrder = () => {
  const [orderAction, setOrderAction] = useState("Pending");
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const handleChange = (e, id) => {
    setOrderAction(e.target?.value);
    // const url = `https://lit-falls-18743.herokuapp.com/orders/${id}`;
    // console.log(url); // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(id),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       alert("success");
    //     }
    //   });
  };

  const handleDelete = (id) => {
    const url = `https://lit-falls-18743.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remainingorders = orders.filter((od) => od._id !== id);
          setOrders(remainingorders);
        }
      });
  };
  useEffect(() => {
    fetch(`https://lit-falls-18743.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Poppins", my: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        All Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="right">${row?.price}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button
                      onClick={() => handleDelete(row._id)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={orderAction}
                      // onChange={() => handleChange(row._id)}
                      onChange={handleChange}
                    >
                      {orderActions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllOrder;
