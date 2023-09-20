/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import './User.css'
const User = ({ user }) => {
    const {id, name, username, email } = user;
    const navigate = useNavigate();
    const handleUser = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div className="user-container">
            <h3>{name}</h3>
            <h5>User : {username}</h5>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <button onClick={handleUser}>Show Details</button>
        </div>
    );
};

export default User;