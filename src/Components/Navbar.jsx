import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const signOutSuccess = () => toast.success("Signed out. Until next time, stay inspired!");
const signOutError = () => toast.error("Sign out unsuccessful. Let's try once more for a smooth exit.");


const Navbar = () => {
    const navLinks = <>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold" data-aos="fade-up" data-aos-duration="500"><NavLink to="/userProfile">User Profile</NavLink></li>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li className="font-semibold" data-aos="fade-up" data-aos-duration="500"><NavLink to="/contactUs">Contact Us</NavLink></li>
        <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/register">Register</NavLink></li>
    </>

    const { user, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                console.log(result);
                signOutSuccess();
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                signOutError()
            })
    }

    return (
        <div className="navbar border-2 rounded-xl bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link data-aos="fade-right" data-aos-duration="500" className="btn btn-ghost text-xl" to="/">IndusHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div data-aos="fade-left" data-aos-duration="500" className="flex items-center justify-center">
                            <Link to="/userProfile" tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                                <div className="w-10 rounded-full" title={user?.displayName}>
                                    <img alt="User Images" src={user?.photoURL && user?.photoURL} />
                                </div>
                            </Link>
                            <button onClick={handleSignOut} className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Log out</button>
                        </div>
                        :
                        <Link data-aos="fade-left" data-aos-duration="500" to="/login" className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Log In</Link>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;