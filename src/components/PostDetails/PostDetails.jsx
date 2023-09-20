import { useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
    const details = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = details;
    return (
        <div>
            <h5>post number : {id}</h5>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <p>{postId}</p>
        </div>
    );
};

export default PostDetails;