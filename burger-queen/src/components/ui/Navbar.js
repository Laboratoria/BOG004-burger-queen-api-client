import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                < img src='../components/assest/logo.png' alt='logo' />
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