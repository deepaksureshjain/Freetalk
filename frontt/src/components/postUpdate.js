import React, { useState} from 'react';
import axios from 'axios';

const PostUpdate = ({ match }) => {
    const [title, setTitle] = useState('');
    const [content, setContect] = useState('');

    const titleHandler = e => {
        setTitle(e.target.value)
    }

    const contentHandler = e => {
        setContect(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            'article_title': title,
            'article_body': content,
        }
        axios.put(`http://localhost:8000/posts/articles/update/${match.params.id}/`,data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            }
        })
            .then(response => {
                console.log(response.data)
                window.location = '/myaccount'
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="post-body">
            <h2 align="center">Lets Share</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Title" value={title} onChange={titleHandler} className="article-title" /><br />
                <textarea rows="25" cols="100" value={content} onChange={contentHandler} className="article-content" />
                <input type="submit" value="post" />
            </form>
        </div>
        
    )
}
export default PostUpdate