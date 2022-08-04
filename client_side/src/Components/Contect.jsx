import React from 'react'
import { Box, Button } from '@mui/material'
import {TextField} from '@mui/material'
import { useState , useEffect } from 'react'
import axios from 'axios'


export default function Contect() {
  const [data , setData] = useState({
    Name : '',
    Email : '',
    Contact : ''
  });
  
  const handleChange = (e) => {
const {name , value} = e.target;
setData({...data , [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post('http://localhost:3000/post',data).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    }
    )

  }

  return (
   <>
   <Box sx={{width:"250px" ,margin:"auto" , marginTop:"150px"}}>
   <TextField sx={{marginTop:"20px" , width:"300px" }} id="outlined-basic" onChange={handleChange} label="Name" name='Name' variant="outlined" />
   <TextField sx={{marginTop:"20px" , width:"300px"}}  id="outlined-basic" onChange={handleChange} label="Email" name='Email' variant="outlined" />
   <TextField  sx={{marginTop:"20px" , width:"300px"}} id="outlined-basic" onChange={handleChange} label="Contact" name='Contact' variant="outlined" />
   <Button  sx={{marginTop:"20px" , width:"300px" }} variant="contained" onClick={handleSubmit}>Add</Button></Box>
   </>
  )
}
