
import {Link} from 'react-router-dom';
import LanguagesDropdown from './LanguagesDropdown';

function Header () {
    return (
    <div className = "NavWrapper">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Movies">Movies</Link></li>
                <li id = "register"><Link to="/Register">Register</Link></li>
                <li id ='login'><Link to="/Login">Log In</Link></li>
                <LanguagesDropdown></LanguagesDropdown>
            </ul>
           
        </nav>
    </div>
    )
}

export default Header;
