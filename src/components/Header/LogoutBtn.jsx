import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => dispatch(logout()));

    navigate("/");
    console.log("Appwrite service :: Logout :: success!");
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      LogoutBtn
    </button>
  );
};

export default LogoutBtn;
