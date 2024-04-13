import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const lengthWarning = () => toast.warning("Your password must be at least six characters long.");
const uppercaseWarning = () => toast.warning("Please include at least one uppercase letter in your password.");
const lowercaseWarning = () => toast.warning("Your password must contain at least one lowercase letter.");

const Register = () => {

    const [showPass, setShowPass] = useState(false);



    // const handleShow = () => {
    //     setShowPass(false)
    // }
    // const handleHide = () => {
    //     setShowPass(true)
    // }


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { fullName, email, photo, password } = data;

        if (password.length < 6) {
            lengthWarning();
            return;
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            uppercaseWarning();
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            lowercaseWarning();
            return;
        }
        console.log(password)
    };
    return (
        <div className="mt-4">
            <div className="text-center mx-4 my-3">
                <h1 className="text-xl md:text-3xl font-bold">Registration Now</h1>
                <p className="text-lg">Welcome to our registration page! Registering with us opens up a world of opportunities and benefits. Whether you're a new user or returning member, <br /> creating an account is quick and easy. Join our community today and unlock exclusive features!</p>
            </div>
            <div className="px-4 lg:max-w-7xl mx-auto">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg">Full Name</label>
                        <input type="text" name="name" id="name" className="border-2 p-2" placeholder="Full Name" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="mt-2 text-red-500">This field is required.</span>}

                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" name="email" id="email" className="border-2 p-2" placeholder="Enter your email" {...register("email", { required: true })} />
                        {errors.email && <span className="mt-2 text-red-500">This field is required.</span>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo" className="text-lg">Photo URL</label>
                        <input type="text" name="photo" id="photo" className="border-2 p-2" placeholder="Enter your photo URL" {...register("photo", { required: true })} />
                        {errors.photo && <span className="mt-2 text-red-500">This field is required.</span>}
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type={showPass ? "text" : "password"} name="password" id="password" className=" border-2 p-2" placeholder="Enter your password" {...register("password", { required: true })}
                        />
                        <span onClick={() => setShowPass(!showPass)} className="absolute right-2 bottom-2">
                            {
                                showPass ? <IoEye className="text-2xl md:text-3xl"/> : <IoEyeOff className="text-2xl md:text-3xl"/>
                            }
                        </span>
                        {errors.password && <span className="mt-2 text-red-500">This field is required.</span>}
                    </div>
                    <div className="flex flex-col">
                        <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Registration</button>
                    </div>
                </form>
                <p className="font-semibold mt-2">If you already have an account. Please <Link to="/login" className="text-red-500">Log In</Link></p>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;