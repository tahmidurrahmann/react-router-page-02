import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    const {name, email} = comment;
    return (
        <div>
            <h4>Name : {name}</h4>
            <p><small>Email : {email}</small></p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default CommentDetails;