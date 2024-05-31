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
    const newEmail = response.data.data.user.email;
    const takenNumber = response.data.data.user.number;

    return {userId, newEmail, token, takenNumber};
	} 
	catch (error) {
		throw error;
	}
};

export const logout = async (token) => {
  console.log("tokennnnn:", token)
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
	toast.error(error.response?.data?.message || error.message);
	throw error  }
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

export const getDiscussions = async () => {
  try {
    const response = await api.get('api/firebase/discussions/all');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const createDiscussion = async (name, title,description,) => {
  try {
    const response = await api.post('api/firebase/discussions/create',{
      name:name,
      title:title,
      description:description
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const serverStatus = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const currentuser = async () => {
  try {
    const response = await api.get('api/firebase/auth/currentuser');
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};

export const signup = async (email, number, password) => {
  try {
    const response = await api.post('api/firebase/auth/register', {
      email: email,
      
      password: password,
    });
    return response.data;
  } catch (error) {
    // console.error('Error making API call:', error);
    throw error;
  }
};