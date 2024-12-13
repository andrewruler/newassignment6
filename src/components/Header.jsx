
import {Link} from 'react-router-dom';
import LanguagesDropdown from './LanguagesDropdown';
import { useUserContext } from '../contexts/UserContext';

function Header () {
    const { userData, checkLogin} = useUserContext();
    console.log(userData.firstName);
    return (
    <div className = "NavWrapper">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Movies">Movies</Link></li>
                {
                checkLogin() ? (
                    <>
                    <li>
                        <Link to="/cart">Movie Cart</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    </>
                ) : (
                    <>
                    <li id="register">
                        <Link to="/Register">Register</Link>
                    </li>
                    <li id="login">
                        <Link to="/Login">Log In</Link>
                    </li>
                    </>
                )
                }
                <LanguagesDropdown></LanguagesDropdown>
            </ul>
           
        </nav>
    </div>
    )
}

export default Header;
