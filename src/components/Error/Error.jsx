import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>oops!</h2>
            <i>{error.statusText || error.message}</i>
            {
                error.status === 404 && <div>
                    <h2>you searched wrong info</h2>
                    <span>Go Back to <Link to='/'><button>Home</button></Link></span>
                </div>
            }
        </div>
    );
};

export default Error;