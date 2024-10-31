import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "/src/style/Listmenu.css";

const ImgResponsive = {
  sm: 2,
  md: 3,
  lg: 4,
};

const imageFiles = import.meta.glob('../../assets/img/*.{jpg,jpeg,png,gif}', { eager: true });
const images = Object.fromEntries(
  Object.entries(imageFiles).map(([key, value]) => [
    key.split('/').pop(), // เอาเฉพาะชื่อไฟล์
    value.default
  ])
);

export const Listmenu = () => {

  const [allproducts,setAllProducts] = useState([])
  const dispatch = useDispatch();
  const [cols, setCols] = useState(getColumns());
  function getColumns() {
    const screenSize = window.innerWidth;
    if (screenSize < 660) {
      return ImgResponsive.sm;
    } else if (screenSize < 1248) {
      return ImgResponsive.md;
    } else {
      return ImgResponsive.lg;
    }
  }

  function handleResize() {
    setCols(getColumns());
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addCart = (product) => {
    dispatch(addToCart(product));
   
  };

  const fetchProduct = (()=> {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("http://localhost:8000/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result,'result')
      // ตรวจสอบโครงสร้างข้อมูลและแปลงให้เป็น array
      const productsArray = Array.isArray(result) ? result : 
      result.result ? Array.isArray(result.result) ? result.result : [] :
      [];

      console.log('Processed Products:', productsArray); // ดูข้อมูลหลังแปลง
      setAllProducts(productsArray);
        setAllProducts(productsArray)
      })
      .catch((error) => console.error(error));
  })

  useEffect(() => {
    fetchProduct();
  }, [])

   // ฟังก์ชันสำหรับหา URL ของรูปภาพ
  const getImageUrl = (imageName) => {
    // ถ้าไม่มีชื่อไฟล์รูปภาพ ให้ใช้รูป default
    if (!imageName) return '/default-product-image.jpg';
    
    // หารูปภาพจาก images object
    const imageUrl = images[imageName]?.default || images[imageName];
    return imageUrl || '/default-product-image.jpg';
  };

  return (
 <>
     <ImageList  cols={cols}>
      {allproducts && allproducts.map((item) => (
        <ImageListItem key={item.product_id} sx={{ margin: "8px" }}>
          <img
            src={getImageUrl(item.img)}
            // src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading='lazy'
            className='box-menu'
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.description}
            actionIcon={
              <IconButton
              sx={{
                color: "rgba(255, 255, 255, 0.54)",
                '&:hover': {
                  cursor: "pointer",
                  color: "rgba(255, 255, 255, 1)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                },
                transition: "all 0.3s ease-in-out",
              }}
                aria-label={`info about ${item.name}`}
                onClick={() => { addCart(item); }}
               
              >
                <AddCircleIcon />
              </IconButton>
            }
            className='box-menu-title'
          />
        </ImageListItem>
      ))}
    </ImageList>
    <ToastContainer autoClose={1000} />
 </>
  );
};
