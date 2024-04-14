import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className="flex justify-center items-center h-[450px]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object
}