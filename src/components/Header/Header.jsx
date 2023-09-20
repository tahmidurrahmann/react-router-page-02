import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome To our website!</h2>
            <div className="link-container">
                <Link to="/users">Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/comments'>Comments</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;