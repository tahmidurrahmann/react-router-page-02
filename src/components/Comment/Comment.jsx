import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {

    const {id, name, body} = comment;

    const navigate = useNavigate();

    const handleComment = () => {
        navigate(`/comment/${id}`)
    }

    return (
        <div className="user-container">
            <h3>Name : {name}</h3>
            <p><small>{body}</small></p>
            <Link to={`/comment/${id}`}>Show Details</Link>
            <button onClick={handleComment}>Show More</button>
        </div>
    );
};

export default Comment;