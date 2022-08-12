import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="text" className="form-control" id="Name" placeholder="Enter Name" onChange={(e) => setUser({...user, Name: e.target.value})} />
        </div>
        <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-control" id="Email" placeholder="Enter Email" onChange={(e) => setUser({...user, Email: e.target.value})} />
        </div>
        <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Enter Password" onChange={(e) => setUser({...user, Password: e.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <Link to={"/login"}><button>login</button></Link>

    </>
  )
}
