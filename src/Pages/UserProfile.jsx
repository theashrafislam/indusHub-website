import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    return (
        <div className="mt-8">
            <div className="flex flex-col justify-center items-center">
                <div className="w-4/12 md:w-3/12 lg:w-2/12 mx-auto">
                    <img className="w-full rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="mt-4">
                    <h1 className="text-xl"><span className="font-bold">Name:</span> {user?.displayName}</h1>
                    <p className="text-xl"><span className="font-bold">Email:</span> {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;