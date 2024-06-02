import { logout } from "../../services/user.api";

const LoggedInDropDown = ({navigate}) => {

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
		const data = await logout(token);
		if (!data.error) {
			localStorage.clear();
			navigate("/login");
		}
	};

    return (
        <div className="relative">
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/profile")}
                >
                    View Your Profile
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/update-profile")}
                >
                    Update Your Profile
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/trips")}
                >
                    Show Trips
                </li>
                <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/cancelled-trips")}
                >
                    Archieved Trips
                </li>
                <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    Logout
                </li>
                </ul>
            </div>
        </div>
    )
};

export default LoggedInDropDown;