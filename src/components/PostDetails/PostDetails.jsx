import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const details = useLoaderData();
    const {id, title, body} = details;
    return (
        <div>
            <h5>post number : {id}</h5>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;