import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData();
    const {name, email} = comment;
    return (
        <div>
            <h4>Name : {name}</h4>
            <p><small>Email : {email}</small></p>
        </div>
    );
};

export default CommentDetails;