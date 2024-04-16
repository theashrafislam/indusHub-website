import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const { signUp, updateUserProfile, setReload, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { fullName, email, photo, password } = data;

        if (password.length < 6) {
            toast('Your password must be at least six characters long.',{icon: '⚠',});
            return;
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            toast('Please include at least one uppercase letter in your password.',{icon: '⚠',});
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            toast('Your password must contain at least one lowercase letter.',{icon: '⚠',});
            return;
        }

        signUp(email, password)
            .then(result => {
                console.log(result);
                toast.success('Welcome aboard! Your account is now ready to explore. Enjoy the journey ahead!', { duration: 3000 });
                userSignOut()
                setTimeout(() => {
                    navigate("/login");
                }, 3000);

                //updateUserProfile
                updateUserProfile(fullName, photo)
                    .then(() => {
                        console.log('profile updated');
                        setReload(true);
                        // toast.success('Profile Updated', { duration: 3000 });
                    })
                    .catch(() => {
                        console.log('profile not updated');
                        // toast.success('Profile not updated', { duration: 3000 });
                    })
            })
            .catch(error => {
                console.log(error);
                toast.error("Oops! Let's fix that error and get you onboarded smoothly.", { duration: 3000 });
            })
    };
    return (
        <HelmetProvider>
            <div className="mt-4" data-aos="zoom-in-down" data-aos-duration="1000">
                <Helmet>
                    <title>Registration Page || IndusHub</title>
                </Helmet>
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
                                    showPass ? <IoEye className="text-2xl md:text-3xl" /> : <IoEyeOff className="text-2xl md:text-3xl" />
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
                <Toaster position="top-right" />
            </div>
        </HelmetProvider>
    );
};

export default Register;