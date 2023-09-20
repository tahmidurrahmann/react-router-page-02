import { useLoaderData } from "react-router-dom";
import './ShowDetails.css'
const ShowDetails = () => {

    const user = useLoaderData();

    const {name, phone, website} = user;

    return (
        <div className="show-container">
            <h2>{name}</h2>
            <p>Number : {phone}</p>
            <p>Website : {website}</p>
        </div>
    );
};

export default ShowDetails;