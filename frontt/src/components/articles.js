import React from 'react';
import './posts.css'
import {Link} from 'react-router-dom'
const Articles = (props) => {
    return(
        <div className="post">
            <Link className="author" to={`/profile/${props.author}`}><h3>{props.author}</h3></Link>
            <h4 className="title" align="left">{props.title}</h4>
            <h6 className="content">{props.content}</h6>
        </div>
    )
}
export default Articles;