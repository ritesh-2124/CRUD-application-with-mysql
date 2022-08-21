import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function Signup() {
const [user, setUser] = React.useState({
    Name: '',
    Email: '',
    Password: '',
})


console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3004/signup', user).then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => {
            throw err;
        }).finally(() => {
            setUser({
                Name: '',
                Email: '',
                Password: '',
            })
        }
        )
    }



  return (
    <>
        <Box mt={20}>
        <Typography>You are making a co admin</Typography>
            <TextField variant="outlined" label="Name" type="text" id="Name"  onChange={(e) => setUser({...user, Name: e.target.value})} />
        </Box>
        <Box mt={2}>
            <TextField variant="outlined" label="Email" type="email" id="Email"  onChange={(e) => setUser({...user, Email: e.target.value})} />
        </Box>
        <Box mt={2}>
            <TextField variant="outlined" label="Password" type="password" id="Password"  onChange={(e) => setUser({...user, Password: e.target.value})} />
        </Box>
        <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Box>
        {/* <Box mt={2}>
        <Link to={"/Signup"}  style={{textDecoration:"none"}}><Button variant="contained">Make Co-admin</Button></Link>
        </Box> */}
    </>
  )
}
