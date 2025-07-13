import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import filmroll from '../images/filmroll.png';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to='/'><img src={filmroll} alt="Filmroll" className="navbar-logo" /></Link>
            </div>
            <div className='navbar-title'>
                MOVIESNOW
            </div>
            <div className='navbar-links'>
                <Link to='/' className='navbar-link'>Home</Link>
                <Link to='/favorites' className='navbar-link'>Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;
