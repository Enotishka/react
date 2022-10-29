import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component }) => {
  const isAuth = useSelector((state) => state.profile.auth);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return component;
};
