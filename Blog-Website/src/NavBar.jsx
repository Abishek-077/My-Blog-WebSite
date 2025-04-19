import { Link } from "react-router-dom";
export default function NavBar() {
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
                    <Link to={'/artciles/:name'}>ArticlesPage</Link>
                </li>
            </ul>
        </>
    )
}