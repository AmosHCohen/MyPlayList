import './Header.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div id="header" className='headerContainer'>
            <div className='headerInnerWidth'>
                <div className='workshopHeader'>
                    <div> <Link to="/">Home</Link></div>
                    <div> <Link to="/login">Login</Link></div>
                    <div> <Link to="/search">Search</Link></div>
                    <div> <Link to="/logout">Logout</Link></div>
                </div>
                <div>Our playList</div>

                {/* <img
                    src={threeLines}
                    alt="threeLines"
                    className='threeLines'
                /> */}
            </div>
        </div>
    )
}