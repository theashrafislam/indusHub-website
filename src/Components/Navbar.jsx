import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navLinks = <>
        <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold"><NavLink to="/userProfile">User Profile</NavLink></li>
        <li className="font-semibold"><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li className="font-semibold"><NavLink to="/contactUs">Contact Us</NavLink></li>
        <li className="font-semibold"><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 border-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">IndusHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">
                    <Link to="/login">Log In</Link>
                </button>

            </div>
        </div>
    );
};

export default Navbar;