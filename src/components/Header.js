import './Header.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div id="header">
            <span> <Link to="/">Home</Link></span>
            <span> <Link to="/login">Login</Link></span>
            <span> <Link to="/search">Search</Link></span>
            <span> <Link to="/logout">Logout</Link></span>
        </div>
    )
}