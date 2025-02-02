import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from 'react-hot-toast';


const LogIn = () => {
    const { singIn, loginWithGoogle, loginWithGitHub } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;

        singIn(email, password)
            .then(result => {
                console.log(result);
                toast.success('Log in Success! Welcome Back!', {duration: 3000});
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                },3000);

            })
            .catch(error => {
                console.log(error);
                toast.error("Oops! Looks like something went wrong. Let's try again.")
            })
    };

    const handleGoolge = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result);
                toast.success('Log in Success! Welcome Back!', {duration: 2000});
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => {
                console.log(error);
                toast.error("Oops! Looks like something went wrong. Let's try again.")
            })
    };
    const handleGithub = () => {
        loginWithGitHub()
            .then(result => {
                console.log(result);
                toast.success('Log in Success! Welcome Back!', {duration: 2000});
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => {
                console.log(error);
                toast.error("Oops! Looks like something went wrong. Let's try again.")
            })
    }

    return (
        <HelmetProvider>
            <div className="mt-4">
                <Helmet>
                    <title>Login Page || IndusHub</title>
                </Helmet>
                <div className="text-center mx-4 my-3">
                    <h1 className="text-xl md:text-3xl font-bold">Login Now</h1>
                    <p className="text-lg">Welcome back to the realm of connection and exploration. Log in to unlock personalized experiences,<br /> connect with like-minded individuals, and embark on your digital journey with us.</p>
                </div>
                <div className="px-4 lg:max-w-7xl mx-auto">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input type="email" name="email" id="email" className="border-2 p-2" placeholder="Enter your email" {...register("email", { required: true })} />
                            {errors.email && <span className="mt-2 text-red-500">This field is required.</span>}
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input type={showPass ? "text" : "password"} name="password" id="password" className=" border-2 p-2" placeholder="Enter your password" {...register("password", { required: true })} />
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-2 bottom-2">
                                {
                                    showPass ? <IoEye className="text-2xl md:text-3xl" /> : <IoEyeOff className="text-2xl md:text-3xl" />
                                }
                            </span>
                            {errors.password && <span className="mt-2 text-red-500">This field is required.</span>}
                        </div>
                        <div className="flex flex-col">
                            <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Login</button>
                        </div>
                    </form>
                    <p className="font-semibold mt-2">If you haven't an account. So, please <Link to="/register" className="text-red-500">Registration</Link></p>
                    <div className="border-t-2 border-b-2 mt-4">
                        <h1 className="text-center font-bold text-lg py-2">Login With</h1>
                    </div>
                    <div className="flex justify-between items-center gap-5 mt-5">
                        <div className="w-full">
                            <button onClick={handleGoolge} className="btn w-full text-lg md:text-xl bg-violet-600 text-gray-50 hover:text-black"> <FaGoogle /> Google</button>
                        </div>
                        <div className="w-full">
                            <button onClick={handleGithub} className="btn w-full text-lg md:text-xl bg-violet-600 text-gray-50 hover:text-black"><FaGithub /> GitHub</button>
                        </div>
                    </div>
                </div>
                <Toaster position="top-right" />
            </div>
        </HelmetProvider>
    );
};

export default LogIn;