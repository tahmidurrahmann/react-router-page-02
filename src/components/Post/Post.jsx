import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Post = ({ post }) => {
    const {id, title, body} = post;
    return (
        <div className="user-container">
            <h4>post id : {id}</h4>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;