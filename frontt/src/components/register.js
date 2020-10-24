import React,{ useState } from 'react'
import axios from 'axios'
import './register.css'
import {Link} from 'react-router-dom'
const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [token, setToken] = useState("");
    const [res, setRes] = useState('');
    const UsernameHandler = e => {
        setUsername(e.target.value)
    }
    const emailHandler = e => {
        setEmail(e.target.value)
    }
    const password1Handler = e => {
        setPassword1(e.target.value)
    }
    const password2Handler = e => {
        setPassword2(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        const data = {
            username:username,
            email:email,
            password1:password1,
            password2:password2
        }
        axios.post("http://127.0.0.1:8000/users/register/", data)
        .then(response => {
                console.log(response)
                setToken(response.data.token)
                if (token !=''){
                    console.log(token)
                    window.location = '/home'
                }
                else{
                    setRes(response.data.error)
                    console.log(res)
                }
        })  
        .catch(error => {
            console.log(error)
        })
    }

    localStorage.setItem('token',token)

    return (
        <div className="Container">
            <h1>freetalk</h1>
                <label>{res}</label>
                <div className="Sign-up">
                    <h2>Sign Up</h2>
                    <form onSubmit={submitHandler}>
                    <div className="txt_field">
                        <input type="text" name="" value={username} onChange={UsernameHandler} /><br/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="email" name="email" value={email} onChange={emailHandler} /><br/>
                        <span></span>
                        <label>Email Address</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name="password1" value={password1} onChange={password1Handler} /><br/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name="password2" value={password2} onChange={password2Handler} /><br/>
                        <span></span>
                        <label>Confirm password</label>
                    </div>

                        <br/>
                        <input type="submit" value="Register" />
                    </form>
                    <br/>
                    <Link to="/signin" className="link">signin</Link>
                </div>
        </div>
    )


}
export default Register