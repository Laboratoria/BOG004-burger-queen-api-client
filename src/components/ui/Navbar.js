import { Link, NavLink } from 'react-router-dom';
import Logo from '../assest/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                < img src={Logo} alt='logo' />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/Login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/chef"
                    >
                        Chef
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/waiter"
                    >
                        Waiter
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/admin"
                    >
                        Admin
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}