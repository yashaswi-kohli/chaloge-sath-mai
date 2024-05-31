import React from "react";
import { useNavigate } from "react-router-dom";
import LogOutDropDown from "./userLogedOut";
import LoggedInDropDown from "./userLoggedIn";

const UserDropdown = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

  return token === null ? 
    ( <LogOutDropDown navigate={navigate} />) : 
    ( <LoggedInDropDown navigate={navigate} /> );
};

export default UserDropdown;
