import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import LoginSkeleton from '../../pages/LoginSkeleton';
import GetImagePreview from '../../pages/GetImagePreview';
import Input from '../../pages/Input';
import toast from 'react-hot-toast';

const SignupPage = () => {
  
	const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
	const { control, handleSubmit, register, formState: {errors}} = useForm();


	const submit = async (data) => {
		setLoading(true);
		try {
        	const response = await registerUser(data);
			toast.success("User has been created, please login");
			if(response.data.success) navigate("/login");
		}
		catch(error) {
			console.error('Error during signup:', error.response?.data?.message || error.message);
      		toast.error(error.response?.data?.message || error.message);
		}
		finally {
			setLoading(false);
		}
    };

	if (loading) {
		return <LoginSkeleton />;
	}


	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
		<h2 className="text-2xl font-bold mb-6">Signup</h2>

		<form 
			onSubmit={handleSubmit(submit)}
		>
			<div className="w-full relative h-28 bg-[#ffffff]">
				<div className="w-full h-full">
					<GetImagePreview
						name="avatar"
						control={control}
						className="w-full h-28 object-cover border-none border-slate-900"
						cameraIcon
					/>
					<div className="text-sm absolute right-2 bottom-2 hover:text-purple-500 cursor-default">
						Avatar Image
					</div>
				</div>
			</div>
			{errors.avatar && (
				<div className="text-red-500">
					{errors.avatar.message}
				</div>
			)}

			<Input
				label="Firstname: "
				type="text"
				placeholder="Enter firstname"
				{...register("firstName", {
					required: "firstname is required",
				})}
				className="h-8"
			/>
			{errors.firstName && (
				<span className="text-red-500">
					{errors.firstName.message}
				</span>
			)}

			<Input
				label="Lastname: "
				type="text"
				placeholder="Enter lastname"
				{...register("lastName", {
					required: "lastname is required",
				})}
				className="h-8"
			/>
			{errors.lastName && (
				<span className="text-red-500">
					{errors.lastName.message}
				</span>
			)}

			<Input
				label="Birthdate: "
				type="date"
				placeholder="Enter your birthdate"
				{...register("birthdate", {
					required: "birthdate is required",
				})}
				className="h-8"
			/>
			{errors.birthdate && (
				<span className="text-red-500">
					{errors.birthdate.password}
				</span>
			)}

			<Input
				label="Email: "
				type="text"
				placeholder="Enter email"
				{...register("email", {
					required: "email is required",
				})}
				className="h-8"
			/>
			{errors.email && (
				<span className="text-red-500">
					{errors.email.message}
				</span>
			)}

			<Input
				label="Number: "
				type="number"
				placeholder="Enter number"
				{...register("number", {
					required: "number is required",
				})}
				className="h-8"
			/>
			{errors.number && (
				<span className="text-red-500">
					{errors.number.message}
				</span>
			)}

			<Input
				label="Password: "
				type="text"
				placeholder="Enter password"
				{...register("password", {
					required: "password is required",
				})}
				className="h-8"
			/>
			{errors.password && (
				<span className="text-red-500">
					{errors.email.password}
				</span>
			)}
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
			>
				{loading ? "Signing up..." : "Signup"}
			</button>
		</form>
		</div>
	);
};

export default SignupPage;
