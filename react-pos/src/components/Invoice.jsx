import { useRef } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//style for modal
const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background:'#fff',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Invoice = ({open,handleClose}) => {

  const invoiceRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box style={styleModal} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div
        ref={invoiceRef}
        className="invoice-container"
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "210mm",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ddd",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          // background:'#fff',
          color: '#000',
          marginTop: '10px'
        }}
      >
        <h1>Invoice</h1>
        <p>Date: May 14, 2022 / No.456465</p>
        <p>
          <strong>To:</strong> Alex Bets
        </p>
        <p>Add: Inner The Embracedero New York</p>
        <p>Mail: Bets@gmail.com</p>
        <hr />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "start" }}>UI Design</td>
              <td style={{ textAlign: "right" }}>$2,000.00</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p style={{display:'flex',justifyContent:'space-between'}}>
          <strong >Subtotal:</strong>
          <span >$10,300.00</span>
        </p>
        <p  style={{display:'flex',justifyContent:'space-between'}}>
          <strong >Tax:</strong>
          <span>$620.00</span>
        </p>
        <h2  style={{display:'flex',justifyContent:'space-between'}}>
          <strong>Total:</strong>
          <span>$10,920.00</span>
        </h2>
      </div>

      <button
        onClick={handlePrint}
        className="print-button"
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Print Invoice
      </button>
      </Box>
      </Modal>
   
  );
};

export default Invoice;
