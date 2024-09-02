"use client";

import { IconButton, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item.cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const handleIncremental = () => {
    setTotal(total + 1);
  };
  const myItems = [
    { itemname: "iPhone15", price: 399 },
    { itemname: "iPhone15 Pro", price: 499 },
    { itemname: "iPhone15 Pro Max", price: 699 },
    { itemname: "iPhone15 Pro Plus Ultra", price: 799 },
  ];
  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* loop all array object */}
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            itemname={item.itemname}
            itemPrice={item.price}
            handleIncremantal={handleIncremental}
          />
        ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{total}</Typography>
      </Stack>
    </div>
  );
}
