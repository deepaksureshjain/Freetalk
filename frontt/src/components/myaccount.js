import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './posts.css'
import './home.css'
import axios from 'axios';
import PostUpdate from './postUpdate';
const Myaccount = () => {
    console.log(localStorage.getItem('token'))
    const [details, setDetails] = useState({});
    const [posts, setPosts] = useState([]);
    const [tok, setTok] = useState(localStorage.getItem('token'));
    useEffect(() =>{
        getAccount();
    },[])
    const getAccount = async () =>{
        const response = await fetch('http://127.0.0.1:8000/users/myaccount/',{
        headers:{
                'Content-Type':'application/json',
                Authorization:tok,
        }})
        const data = await response.json();
        setDetails(data)
        setPosts(data.article.articles);
        console.log(posts.length)
    } 


    return(
        <div>
            <div className="nav">
                <h4>{details.username}</h4>
                <h4>{details.email}</h4>
            </div>
            {
                posts.map(post => (
                <div className="post">
                    <h4 className="title">{post.article_title}</h4>
                    <h6 className="content">{post.article_body}</h6>
                    <Link to={`/articledelete/${post.id}`}><button type="submit">Delete</button></Link>
                    <Link to={`/articleupdate/${post.id}`}><button type="submit">update</button></Link>
                </div>
            ))}
        </div>
    )
}

export default Myaccount;