import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function logIn() {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h1>Log In</h1>
            {error && <p>{error}</p>}
            <input
                placeholder='Enter email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button onClick={logIn}>Log In</button>
            <Link to={'/createAccount'}>Don't have an account? Create one here</Link>
        </>
    );
}
