import './Users.css'
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div className="users-container">
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;