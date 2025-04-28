import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import useUser from './useUser';

export default function NavBar() {
    const { isLoading, user } = useUser();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to={'/'} className="navbar-link">HomePage</Link>
                </li>
                <li className="navbar-item">
                    <Link to={'/about'} className="navbar-link">About Me</Link>
                </li>
                <li className="navbar-item">
                    <Link to={'/articles'} className="navbar-link">My Articles</Link>
                </li>

                {isLoading ? (
                    <li className="navbar-item">Loading......</li>
                ) : (
                    <>
                        {user && (
                            <li className="navbar-item user-info">
                                <p>Logged in as <span className="user-email">{user.email}</span></p>
                            </li>
                        )}
                        <li className="navbar-item">
                            {user ? (
                                <button className='button-style' onClick={() => signOut(getAuth())}>Log Out</button>
                            ) : (
                                <button className='button-style' onClick={() => navigate('/login')}>Log In</button>
                            )}
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
