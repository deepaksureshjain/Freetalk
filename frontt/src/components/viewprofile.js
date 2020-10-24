import React,{useState,useEffect} from 'react'
import './posts.css'
import './home.css'
const Profile = ({ match }) => {
    useEffect(() => {
        getProfile();
    },[])
    const [profile, setProfile] = useState({});
    const [posts, setPosts] = useState([]);


    const getProfile = async () => {
        const response = await fetch(`http://127.0.0.1:8000/posts/profile/${match.params.id}`)
        const data = await response.json();
        setProfile(data)
        setPosts(data.articles)
    }
    return(
        <div>
            <div className="nav">
                <h2>{profile.username}</h2>
                <h2>{profile.email}</h2>
            </div>
            {posts.map(post => (
                <div className="post">
                    <h4 className="title">{post.article_title}</h4>
                    <h6 className="content">{post.article_body}</h6>
                </div>
            ))}
        </div>
    )
}
export default Profile