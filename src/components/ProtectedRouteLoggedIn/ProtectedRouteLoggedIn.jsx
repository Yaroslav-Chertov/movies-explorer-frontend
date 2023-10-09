import { Navigate } from 'react-router-dom';

const ProtectedRouteloggedIn = ({ element: Component, ...props }) => {
    if (props.tokenExist) {
        if (props.isLoggedIn && (props.isSignupPage || props.isLoginPage)) {
            return <Component {...props} />;
        } else {
            return <Navigate to='/' replace />;
        }
    } else {
        return <Component {...props} />;
    }
};

export default ProtectedRouteloggedIn;