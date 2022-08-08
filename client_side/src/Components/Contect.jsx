import React from 'react'
import { Box, Button } from '@mui/material'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Contect() {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Contact: ''
  });
  const [update, setUpdate] = useState('');
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3004/get/${id}`);
    setData({ ...response.data[0] });
  }
  useEffect(() => {

    fetchData();
  }, [id]);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if(id){
      axios.put(`http://localhost:3004/put/${id}`, data)
      .then(res => {
        setUpdate(res.data)
      }).catch(err => {
      }).finally(() => {
        setData({
          Name: '',
          Email: '',
          Contact: ''
        })
      }
      )
    }
    else{
    axios.post('http://localhost:3004/post', data).then(res => {
    }
    ).catch(err => { 
      throw err;
    }
    ).finally(() => {
      setData({
        Name: '',
        Email: '',
        Contact: ''
      })
    }
    )
  }
  }

  return (
    <>
      <Box sx={{ width: "250px", margin: "auto", marginTop: "150px" }}>
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" value={data.Name || ""} onChange={handleChange} label="Name" name='Name' variant="outlined" />
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" onChange={handleChange} label="Email" value={data.Email || ""} name='Email' variant="outlined" />
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" onChange={handleChange} label="Contact"  name='Contact' value={data.Contact || ""} variant="outlined" />
        <Button sx={{ marginTop: "20px", width: "300px" }} variant="contained" onClick={ handleSubmit}>{id ? "Update" : "Add"}</Button></Box>
    </>
  )
}
