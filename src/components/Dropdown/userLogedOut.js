const LogOutDropDown = ({navigate}) => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="py-1">
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/login")}
                >Log In
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/signup")}
                > Sign Up
                </li>
            </ul>
        </div>
    )
}


export default LogOutDropDown;