import * as React from "react";
import { styled } from "@mui/material/styles";
import { Routes, Route,} from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Sidenav } from "./content/Sidenav";
import { CheckOut } from "./content/CheckOut";
import { CartPage } from "./CartPage";
import { AddProduct } from "./products/AddProduct";
import { Management_pro } from "./products/Management_pro";
import {UpdateProduct } from "./products/UpdateProduct";
import "/src/style/Allcontent.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ mt: 1 }}>
        <Grid item xs={2} lg={1}>
          <Item sx={{ height: "100vh" }}>
            <Sidenav />
          </Item>
        </Grid>
        <Routes>
              <Route path="/" element={<CartPage />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/management_pro" element={<Management_pro />} />
              <Route path="/update_product/:id" element={<UpdateProduct/>} />
        </Routes>
      </Grid>
    </Box>
  );
};
