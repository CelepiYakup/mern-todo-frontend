import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from './hooks/useLogout';
import { useAuthContext } from './hooks/useAuthContext';
const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className='container1'>
            <Link to="/">
            <h2>List of Todos</h2>
            </Link>
            <nav>
                {user && (<div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (<div>
                    <Link to = "/login">Login</Link>
                    <Link to = "/signup">Signup</Link>
                </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
