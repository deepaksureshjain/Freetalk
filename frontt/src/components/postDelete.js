import React,{useState,useEffect} from 'react';
import axios from 'axios';

const PostDelete = ({ match }) =>{
    const [res, setRes] = useState({});
    setTimeout(() => {
        window.location ='/myaccount'
    }, 3000)
    useEffect(() =>{
        deletepost();
    },[])
    const deletepost = () => {
        axios.delete(`http://localhost:8000/posts/articles/delete/${match.params.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            }
        })
                .then(response => {
                    setRes(response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        return(
            <div>
                <h3>{res.deleted}</h3>
            </div>
        )
}
export default PostDelete