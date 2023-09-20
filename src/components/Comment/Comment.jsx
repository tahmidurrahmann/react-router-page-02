import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
    const {id, name, body} = comment;
    return (
        <div className="user-container">
            <h3>Name : {name}</h3>
            <p><small>{body}</small></p>
            <Link to={`/comment/${id}`}>Show Details</Link>
        </div>
    );
};

export default Comment;