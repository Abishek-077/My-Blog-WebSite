import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function CreateAccountPage() {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { conformPassword, setConformPassword } = useState('')
    const { error, setError } = useState('');

    const navigate = useNavigate();
    async function createAccount() {
        if (password !== conformPassword) {
            setError('Password and Conform Password do not match')
            return;
        }


        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');

        } catch (e) {
            setError(e.message);

        }

    }

    return ( // first be create an input field...
        <>
            <h1>Create Account</h1>
            {error && <p>{error}</p>}
            <input
                placeholder='Enter email address'
                value={email}
                onChange={e => setEmail(e.target.value)} />

            <input
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)} />

            <input
                placeholder='Conform Password'
                value={conformPassword}
                onChange={e => setConformPassword(e.target.value)} />




            <button onClick={createAccount}>Create Account</button>
            <Link to={'/login'}>Already have an account? Please Log In</Link>
        </>


    );



}
