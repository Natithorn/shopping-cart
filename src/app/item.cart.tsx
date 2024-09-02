"use client";
import React from "react";
import { IconButton, Stack, Typography, Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ItemCart({
  itemname,
  itemImage,
  itemPrice,
  handleIncremental,
  handleDecremental,
  onQuantityChange,
}: {
  itemname: string;
  itemImage: string;
  itemPrice: number;
  handleIncremental: (price: number) => void;
  handleDecremental: (price: number) => void;
  onQuantityChange: (quantity: number) => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    handleIncremental(itemPrice);
    onQuantityChange(newCount); 
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      const newTotalPrice = newCount * itemPrice;
      setTotalPrice(newTotalPrice);
      handleDecremental(itemPrice);
      onQuantityChange(newCount); 
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4} md={3}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '8px',
          height: '150px',
          backgroundColor: '#f5f5f5'
        }}>
          <img 
            src={itemImage} 
            alt={itemname} 
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h6">{itemname}</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton onClick={handleRemoveItemClick}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6">{count}</Typography>
              <IconButton onClick={handleAddItemClick}>
                <AddIcon />
              </IconButton>
            </Stack>
          </Box>
          <Typography variant="h6">
            {totalPrice.toLocaleString()} บาท
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
