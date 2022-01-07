import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Stripe from "../Payment/Stripe/Stripe";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
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
    fetch(`https://lit-falls-18743.herokuapp.com/orders/${user.email}`)
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
        MyOrder: {orders.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Payment</TableCell>
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
                  {row?.action ? (
                    <Typography
                      sx={{ fontFamily: "Poppins", my: 3, mx: 2 }}
                      variant="p"
                      gutterBottom
                      component="span"
                    >
                      PAID
                    </Typography>
                  ) : (
                    <Stripe data={{ row }} />
                  )}
                </TableCell>
                <TableCell align="right">
                  {row?.action ? (
                    <Typography
                      sx={{ fontFamily: "Poppins", my: 3, mx: 2 }}
                      variant="p"
                      gutterBottom
                      component="span"
                    >
                      Shipped
                    </Typography>
                  ) : (
                    <Typography
                      sx={{ fontFamily: "Poppins", my: 3, mx: 2 }}
                      variant="p"
                      gutterBottom
                      component="span"
                    >
                      prossesing
                    </Typography>
                  )}
                  <Button
                    onClick={() => handleDelete(row._id)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrder;
