import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Box , Button , TextField , Typography} from '@mui/material'


export default function Login() {
    const [user, setUser] = React.useState({
        Email: '',
        Password: '',
    })
let token;
const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3004/login', user).then(res => {
           token = res.data.token
           if(token){
            navigate('/home')
           }else{
            alert('Invalid Credentials')
           }
        }).catch(err => {
            throw err;
        }).finally(() => {
            setUser({
                Email: '',
                Password: '',
            })
        }
        )
    }

  return (
    <>
    <Box ml={150} mt={5}>
       <Button variant="contained" color="primary" onClick={() => navigate('/Add')}>Apply for Job</Button>
        </Box>
          <Box mt={20}>
          <Typography m={5} variant='h4'>Admin Login</Typography>
            <TextField variant="outlined" label="Email" type="email" id="Email"  onChange={(e) => setUser({...user, Email: e.target.value})} />
        </Box>
        <Box mt={2}>
            <TextField variant="outlined" label="Password" type="password" id="Password"  onChange={(e) => setUser({...user, Password: e.target.value})} />
        </Box>
        <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Box>

    </>
  )
}
