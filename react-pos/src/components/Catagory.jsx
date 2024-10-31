import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid2,Box } from "@mui/material"

// Import รูปภาพโดยตรง
import menu1 from '../assets/menu-image/menu-1.jpg';
import milk from '../assets/menu-image/milk.jpg';
import menu3 from '../assets/menu-image/menu-3.jpg';
import menu4 from '../assets/menu-image/menu-4.jpg';



export const Catagory = () => {


    const data = [
        {id: 1, name: 'อาหารเสริม', image:`${menu1}`, description: 'Description 1'},
        {id: 2, name: 'นม/โยเกิร์ต', image: `${milk}`, description: 'Description 2'},
        {id: 3, name: 'ยาสามัญ', image: `${menu3}`, description: 'Description 3'},
        {id: 4, name: 'เครื่องดืม', image: `${menu4}`, description: 'Description 4'},
        
    ]
  return (
   <>
      <Box sx={{ flexGrow: 1,height:'100vh', backgroundColor: "#eee",border:'1px solid #eee'  }} >
        <Grid2  sx={{display:'flex', mt:5, alignItems:'center'}} >
            {data.map((item) => (
                <Grid2 key={item.id} item xs={12} sm={6} lg={3} sx={{mx:3}}> {/* ปรับ responsive grid */}
                <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        Click 
                    </Button>
                    </CardActions>
                </Card>
                </Grid2>
            ))}
        </Grid2>
    </Box>
   </>
  )
}
