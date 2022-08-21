import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Contect() {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Contact: '',
    Profile : ''
  });
  const [update, setUpdate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'Profile'){
      setData({ ...data, [name]: e.target.files[0] });
    }
    else{
      setData({ ...data, [name]: value });
    }
  }
console.log(data)

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3004/get/${id}`);
    setData({ ...response.data[0] });
  }
  useEffect(() => {

    fetchData();
  }, [id]);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('Email', data.Email);
    formData.append('Contact', data.Contact);
    formData.append('Profile', data.Profile);
  
    if(id){
      axios.put(`http://localhost:3004/put/${id}`, data)
      .then(res => {
        setUpdate(res.data)
        navigate('/home')

        
      }).catch(err => {
      }).finally(() => {
        setData({
          Name: '',
          Email: '',
          Contact: '',
          Profile : ''
        })
       
      }
      )
    }
    else{
    axios.post('http://localhost:3004/post', formData).then(res => {
      console.log(res.data)
      alert('Data Inserted Successfully we will contact you soon')
      navigate('/')
    }
    ).catch(err => {alert("something went wrong") }).finally(() => {
      setData({
        Name: '',
        Email: '',
        Contact: '',
        Profile : ''
      })
    }
    )
  }
  }

  return (
    <>
      <Box sx={{ width: "300px", margin: "auto", marginTop: "150px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px"  }}>fill the form correct</Typography>
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" value={data.Name || ""} onChange={handleChange} label="Name" name='Name' variant="outlined" />
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" onChange={handleChange} label="Email" value={data.Email || ""} name='Email' variant="outlined" />
        <TextField sx={{ marginTop: "20px", width: "300px" }} id="outlined-basic" onChange={handleChange} label="Contact"  name='Contact' value={data.Contact || ""} variant="outlined" />
        <form action="/profile" method="post" style={{margin:"50px 0" }} encType="multipart/form-data">
        <label htmlFor="file">Upload Profile Picture</label>
        <TextField type="file" onChange={handleChange} name="Profile" />
</form>
        <Button sx={{ marginTop: "20px", width: "300px" }} variant="contained" onClick={ handleSubmit}>{id ? "Update" : "Apply"}</Button>
        </Box>
    </>
  )
}
