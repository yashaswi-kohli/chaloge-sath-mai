import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
});

export const login = async (email, number, password) => {
	try {
		const response = await api.post('users/login', {
			email,
			number,
			password
		});

		const userId = response.data.data.user._id;
		const token = response.data.data.accessToken;
		const rToken = response.data.data.refreshToken;
		const newEmail = response.data.data.user.email;
		const takenNumber = response.data.data.user.number;

		return {userId, newEmail, token, rToken, takenNumber};
	} 
	catch (error) {
      	toast.error(error.response?.data?.message || error.message);
		throw error;
	}
};

export const logout = async (token) => {
    
  try {
    const response = await api.post('users/logout',
    {},
    {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
  } 
  catch (error) {
    	if(error.response?.data?.message == "jwt expired") {
			const refreshToken = localStorage.getItem("rToken");
			const response = await api.post('users/refresh-token', {refreshToken});

			if(response) {
				const result = logout(token);
				return result;
			}
			else {
				toast.error("refresh token does not get changed");
				throw error
			}

		}
		else {
			toast.error(error.response?.data?.message || error.message);
			throw error
		}
	}
};

export const registerUser = async (data) => {
    try {

		const formData = new FormData();
		formData.append("avatar", data.avatar[0]);
		formData.append("firstName", data.firstName);
		formData.append("lastName", data.lastName);
		formData.append("email", data.email);
		formData.append("number", data.number);
		formData.append("password", data.password);
		formData.append("birthdate", data.birthdate);

      	const response = await api.post('users/register', formData);
		return response;
    } 
	catch (error) {
      	toast.error(error.response?.data?.message || error.message);
		throw error
    }
};

export const currentuser = async (token) => {
    try {
        const response = await api.get('users/current-user',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data.data;
    }
    catch (error) {
		console.log(error.response?.data?.message);
		const refreshToken = localStorage.getItem("rToken");
        if(error.response?.data?.message == "jwt expired") {
			console.log("11");
			const response = await api.post('users/refresh-token', {
				refreshToken,
			});
			if(response) {
				const result = currentuser(token);
				return result;
			}
			else {
				toast.error("refresh token does not get changed");
				throw error
			}
		}
		else {
			toast.error(error.response?.data?.message || error.message);
			throw error
		}
    }
};

export const getUserProfile = async (token, userId) => {
	try {
		const response = await api.get(`users/show/${userId}`, userId, {
			headers: {
                Authorization: `Bearer ${token}`,
            }
		});
		console.log(response);
		return response.data.data;
	} 
	catch (error) 
	{
		const refreshToken = localStorage.getItem("rToken");
        if(error.response?.data?.message == "jwt expired") 
		{
			const response = await api.post('users/show/', userId, {refreshToken});

			if(response) {
				const result = await getUserProfile(token, userId);
				return result;
			}
			else {
				toast.error("refresh token does not get changed");
				throw error
			}
		}
		else {
			toast.error(error.response?.data?.message || error.message);
			throw error
		}
	}
}