"use client";
import React from "react";
import { Stack, Typography, Container, Divider, Box } from "@mui/material";
import ItemCart from "./item.cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotal((prevTotal) => prevTotal + price);
  };

  const handleDecremental = (price: number) => {
    setTotal((prevTotal) => prevTotal - price);
  };

  const myItems = [
    { itemname: "iPhone15", price: 28900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2ODFkcDVXTGRPYTNEZm9jVU1sTHdEQ1cwVWQwY3p4S1JSUW03bjhwbHZrKzJ5aFM4QSthSG1nSUl6WXJQME1SZ2tBTDJMc3ZHNFdqOHBBSGlpYVM2UVZpU3kyL0FKUlpaZ25KNUNrQi8rOWdRPT0=&traceId=1" },
    { itemname: "iPhone15 Pro", price: 36900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZFVjY2d1SjN4N3Z4ZHFmT1k0OXhDR2d2S3NaRzcrU0dmYjNHTUFiMnlsWGEwekI5ZWpRa0o2WWdVYzdzTUdBdFZSdzNPWHBoSU9CS09WL3dCYUVxMW8=&traceId=1" },
    { itemname: "iPad Pro", price: 32900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsN2dzSmpObkZCM3MrNmJ5SkhESlNDaktqSkExTHB4VHJRR1hzOGdBenBuczN0bWR6ME9RYmIrVG9PSXZFalM2aHdBb0pjWml6bllCL0Y5a1RKc2gxZjlIaERUT3FJbHFiWTlmb2lodm1tWE55UjVHcmIzQTc0UDFXY0hsUWdxUDFRPT0=&traceId=1" },
    { itemname: "iPad Air", price: 23500, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-11inch-starlight-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5UUlEcGtXd28zb0o3S2tQV3RUSEhpaGxzVWxuaTA3UGxIdzhKNUtuSEF5VlVtYW1kMXNQLzdDd2NuUVFzTDNlZmEyTE1mSHgwMHh1SlVoUDJNTksyTUZHVHhra3BlaEFzL2ZuQnhySE81cXh3PT0=&traceId=1" },
    { itemname: "iPad", price: 13900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=OVJOVlhQelp3cUxDNnpBK0hFNFYrQUxaUVVtOUhUT0c2NzZRUllPeEJTeUI4d29DQnBYMTJ6bGFLQXl4VjVYYmJWU3RPOURZS0RCaG1weXBRYytNTENhUThSUC84VzArL0cyckNrL25wa0VEaXdsQXhSUVJEK2lURHg1RU5ZZUNvSmRod0k3RElNU3NpNVhFUHFEalpRPT0=&traceId=1" },
    { itemname: "iPad mini", price: 19900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wifi_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1670631639152" },
    { itemname: "MacBook Air", price: 36900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" },
    { itemname: "MacBook Pro", price: 147400, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200" },
    { itemname: "iMac", price: 45900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618" },
    { itemname: "Mac mini", price: 20900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341" },
    { itemname: "Mac Studio", price: 74900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {/* Loop through all array objects */}
      {myItems.map((item) => (
        <ItemCart
          key={item.itemname}
          itemname={item.itemname}
          itemImage={item.image}
          itemPrice={item.price}
          handleIncremental={handleIncremental}
          handleDecremental={handleDecremental}
        />
      ))}
      <Box sx={{ 
        mt: 4, 
        p: 2, 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px', 
        boxShadow: 2, 
        textAlign: 'right' 
      }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Total:
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {total.toLocaleString()} บาท
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
