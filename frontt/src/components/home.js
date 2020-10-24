import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import './home.css'
import './posts.css'
import Articles from './articles'
const Home = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() =>{
            getArticles();
        },[])
    
    const getArticles = async () => {
        const response = await fetch('http://127.0.0.1:8000/posts/home/')
        const data = await response.json();
        setArticles(data.articles)
    }
    return(
        <div className="Container">
            <div className="nav">
                <h3>freetalk</h3>
                <Link className="account" to={'/myaccount'}>Myaccount</Link>
                <Link className="create" to={'/postarticle'}>post</Link>
            </div>
            {articles.map(article => (
                <Articles
                key={article.id} 
                author={article.author}
                title={article.article_title}
                content={article.article_body}
                />
            ))}
        </div>
    )
}

export default Home