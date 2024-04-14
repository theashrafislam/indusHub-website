import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {

    const {updateProfile} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {fullName, photoURL} = data;
        // console.log(fullName, photoURL);
        updateProfile(fullName, photoURL)
            .then(result =>{
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-2xl font-bold text-center">Update Your Profile.</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name"  {...register("fullName",)}/>
                    </div>
                    <div>
                        <label htmlFor="photo">Photo</label>
                        <input type="text" name="photo" id="photo" placeholder="Enter your photoURL" {...register("photoURL",)} />
                    </div>
                    <button className="btn">Ok</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;