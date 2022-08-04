import React from 'react';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
const View = () => {
    const {id} = useParams();
    console.log(id)

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/get/${id}`);
        const result = await response.json();
        setData([...result]);
    }
    useEffect(() => {
        fetchData();
    }
        , [])
    console.log(data)

    return (  
        <>
        {data.map((user) => (
        <Box key={user.ID} sx={{margin:"auto" , height:"500px" , width:"300px", marginTop:"130px" ,boxShadow: "rgba(11, 148, 252, 0.24) 0px 3px 8px" , padding:"20px", borderRadius:"20px" }}>
   <Avatar sx={{ bgcolor: "blue" , height:"150px", width:"150px", fontSize:"100px" , margin:"auto", marginLeft:"80px" }}>A</Avatar>
   <Box sx={{margin:"auto" , marginTop:"30px" }}>
   <TextField
          id="filled-read-only-input"
          label="Full Name"
          defaultValue={user.Name}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"10px" , width:"300px"}}
          variant="outlined"
        />
   <TextField
          id="filled-read-only-input"
          label="Email"
          defaultValue={user.Email}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"15px" , width:"300px"}}
          variant="outlined"
        />
         <TextField
          id="filled-read-only-input"
          label="Contect"
          defaultValue={user.Contact}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"15px" , width:"300px"}}
          variant="outlined"
        />
      </Box>
</Box>))}</>
    );
}

export default View;
