import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


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
        <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-control" id="Email" placeholder="Enter Email" onChange={(e) => setUser({...user, Email: e.target.value})} />
        </div>
        <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Enter Password" onChange={(e) => setUser({...user, Password: e.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

    </>
  )
}
