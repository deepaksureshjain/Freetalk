import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
import {Redirect} from 'react-router-dom';
const SignIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [tok, setTok] =useState('');
    const [islogged, setIslogged] = useState(false);
    const [err, setErr] = useState('');


    const UsernameHandler = e => {
        setUsername(e.target.value)
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        axios.post("http://127.0.0.1:8000/users/login/", data)
            .then(response => {
                setTok(localStorage.setItem('token',response.data.token));
                window.location = '/home';
            })
            .catch(error => {
                setErr(error)
            })
    }   


    return (
        <div className="Container">
            <h1>freetalk</h1>
                <div className="Sign-up">
                    <h2>sign in</h2>
                    <form onSubmit={submitHandler}>
                        <div className="txt_field">
                            <input type="text" name="username"  value={username} onChange={UsernameHandler} />
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" name="password" value={password} onChange={passwordHandler} />
                            <span></span>
                            <label>Password</label>
                        </div>
                    <input type="submit" value="post"/>
                    </form>
                    <h3>{err}</h3>
                </div>
        </div>
    )


}
export default SignIn