import React, { useState } from 'react';
import axios from 'axios';
import './postarticle.css';
import { Link } from 'react-router-dom'
const PostArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContect] = useState('');
    const [tok, setTok] = useState(`${localStorage.getItem('token')}`);

    const titleHandler = e => {
        setTitle(e.target.value)
    }

    const contentHandler = e => {
        setContect(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            title: title,
            content: content,
            token: tok
        }
        axios.post("http://127.0.0.1:8000/posts/articles/", data)
            .then(response => {
                console.log(response)
                window.location = '/home'
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="post-body">
            <h2 align="center">Lets Share</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Title" value={title} onChange={titleHandler} className="article-title"/><br/> 
                <textarea rows="25" cols="100" value={content} onChange={contentHandler} className="article-content"/>
                <input type="submit" value="post" />
            </form>
        </div>
    )
}

export default PostArticle