import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Orders } from "./Orders";


export const Cart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", pb: 4 }}>
        <Typography variant='h4' gutterBottom>
          ORDER #
        </Typography>
        <Typography variant='h4' gutterBottom>
          12564878
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Orders />
      {/* <TotalMoney /> */}
    </Box>
  );
};
