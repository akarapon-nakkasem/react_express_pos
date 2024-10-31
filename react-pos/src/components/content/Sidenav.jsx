import * as React from "react";
import Box from "@mui/material/Box";
import "/src/style/Sidenav.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { useNavigate } from "react-router-dom";

export const Sidenav = () => {
  const navigate = useNavigate();

  const NavigateHome = () => {
    navigate("/");
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding sx={{ my: 4 }} onClick={NavigateHome}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='HOME' className='menu' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ my: 4 }}>
            <ListItemButton>
              <ListItemIcon>
                <TextSnippetOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='MENU' className='menu' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ my: 4 }}>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary='PAYMENT' className='menu' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ my: 4 }}>
            <ListItemButton>
              <ListItemIcon>
                <BorderAllIcon/>
              </ListItemIcon>
              <ListItemText primary='ORDERS' className='menu' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
