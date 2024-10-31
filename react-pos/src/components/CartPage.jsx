import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Listmenu } from './content/Listmenu';
import { Cart } from './content/Cart';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  

export const CartPage = () => {
  return (
    <>
        <Grid item xs={10} lg={8}>
          <Item sx={{ height: "100vh" }}>
            <Listmenu />
          </Item>
        </Grid>
        <Grid item lg={3} className='cart'>
          <Item sx={{ height: "100vh",  }}>
            <Cart />
          </Item>
        </Grid> 
    </>
  )
}
