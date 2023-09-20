import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome To our website!</h2>
            <div className="link-container">
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;