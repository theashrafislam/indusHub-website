import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateProfile = () => {

    const { updateUserProfile, setReload } = useContext(AuthContext)

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        const { name, email, photo } = data;
        console.log(name, email, photo);
        updateUserProfile(name, photo, email)
            .then(() => {
                console.log('profile updated');
                setReload(true);
                toast.success('Your profile has been updated')
            })
            .catch(() => {
                console.log('profile not updated');
            })
    }
    return (
        <HelmetProvider>
            <div className="mt-5">
                <Helmet>
                    <title>Update Your Profile || User Update Profile of IndusHub</title>
                </Helmet>
                <div>
                    <h1 className="text-2xl font-bold text-center">Update Your Profile.</h1>
                </div>
                <div className="px-4 lg:max-w-7xl mx-auto">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg">Name</label>
                            <input type="text" name="name" id="name" className="border-2 p-2" placeholder="Enter your name" {...register("name")} />

                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input type="email" name="email" id="email" className="border-2 p-2" placeholder="Enter your email" {...register("email")} />

                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="photo" className="text-lg">Photo URL</label>
                            <input type="text" name="photo" id="photo" className="border-2 p-2" placeholder="Enter your photoURL" {...register("photo")} />
                        </div>
                        <div className="flex flex-col">
                            <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Update Profile</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </HelmetProvider>
    );
};

export default UpdateProfile;