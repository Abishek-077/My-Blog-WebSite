import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import useUser from './useUser';

export default function NavBar() {
    const { isLoading, user } = useUser();
    const navigate = useNavigate();

    return (
        <>
            <ul>
                <li>
                    <Link to={'/'}>HomePage</Link>
                </li>

                <li>
                    <Link to={'/about'}>AboutPage</Link>
                </li>

                <li>
                    <Link to={'/articles'}>ArticlesPage</Link>
                </li>

                {isLoading ? (
                    <li>Loading......</li>
                ) : (
                    <>
                        {user && (
                            <li>
                                <p>Logged in as {user.email}</p>
                            </li>
                        )}

                        <li>
                            {user
                                ? <button onClick={() => signOut(getAuth())}>Log Out</button>
                                : <button onClick={() => navigate('/login')}>Log In</button>
                            }
                        </li>
                    </>
                )}
            </ul>
        </>
    );
}
