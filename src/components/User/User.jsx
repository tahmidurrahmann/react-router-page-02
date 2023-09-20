/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './User.css'
const User = ({ user }) => {
    const {id, name, username, email } = user;
    return (
        <div className="user-container">
            <h3>{name}</h3>
            <h5>User : {username}</h5>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;