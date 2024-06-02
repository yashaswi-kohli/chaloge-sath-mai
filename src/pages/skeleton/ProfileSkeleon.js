import tick from "../../Images/blueTick.svg";
import cross from "../../Images/icons8-cross-48.png";
import { currentuser } from '../../services/user.api';
import { prefrence } from "../../utils/prefrenceOptions";
import React, { useEffect, useRef, useState } from 'react';
import ProfileSkeleon from '../../pages/skeleton/ProfileSkeleon';

const ProfileCard = () => {
	const user = useRef({});
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");

	const tYear = new Date().getFullYear(), tMonth = new Date().getMonth(), tDay = new Date().getDate();

	useEffect(() => {
		setLoading(true);
		getData();
	}, []);

	const getData = async () => {
		const data = await currentuser(token);

		user.current = data;
		user.current.p = data.prefrence;
		user.current.avatar = data.avatar;
		user.current.created = new Date(data.createdAt);
		user.current.rp = data.ridesPublished;
		user.current.ratingStar = data.ratingS;
		user.current.ev = data.isEmailVerified;
		user.current.totalRating = data.nRating;
		user.current.nb = data.isNumberVerified;
		user.current.name = data.firstName + " " + data.lastName;

		const bYear = parseInt(data.birthdate.slice(0, 4)), bMonth = parseInt(data.birthdate.slice(5, 7)), bDay = parseInt(data.birthdate.slice(8, 10));

		user.current.age = tYear - bYear;
		if (tMonth < bMonth || (tMonth === bMonth && tDay < bDay)) user.current.age -= 1;

		user.current.fullDate = `${user.current.created.toLocaleString('default', { month: 'short' })} ${user.current.created.getDate()}, ${user.current.created.getFullYear()}`;
		setLoading(false);
	};

	if (loading) {
		return <ProfileSkeleon />;
	}

	const { avatar, name, age, ratingStar, ev, nb, rp, fullDate, p } = user.current;

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
			<div className="flex items-center space-x-6">
				<img
					src={avatar}
					alt="Profile"
					className="w-24 h-24 rounded-full border-2 border-blue-500"
				/>
				<div className="space-y-2">
					<h2 className="text-2xl font-bold text-gray-800">{name}</h2>
					<p className="text-gray-600">{age} y/o</p>
				</div>
			</div>
			{ratingStar && (
				<div className="space-y-2">
					<div className="flex items-center text-gray-600">
						<span className="material-icons">star</span>
						<span className="ml-1">{ratingStar}/5 — {user.current.totalRating} ratings</span>
					</div>
				</div>
			)}

			<hr className="my-4"/>
			<div className="space-y-2">
				<div className="flex items-center text-gray-600">
					<img src={ev ? tick : cross} alt="Email Verification Icon" className="w-6 h-6" />
					<span className="ml-2">Confirmed email</span>
				</div>
				<div className="flex items-center text-gray-600">
					<img src={nb ? tick : cross} alt="Phone Verification Icon" className="w-6 h-6" />
					<span className="ml-2">Confirmed phone number</span>
				</div>
			</div>

			<hr className="my-4"/>
			<div className="space-y-2">
				<h3 className="text-xl font-semibold text-gray-800 mb-6">About {name}</h3>
				{p && p.map((pref, index) => (
					<div key={index} className="flex items-center text-gray-600">
						<img src={prefrence[pref].logo} alt={`Preference ${index}`} className="w-6 h-6 mr-5 mb-2" />
						<span className="text-gray-600 mb-2">{prefrence[pref].about}</span>
					</div>
				))}
			</div>

			<hr className="my-4"/>
			<div className="space-y-2">
				<div>
					<span className="text-gray-600 mb-2">{rp} Rides Published</span>
				</div>
				<div>
					<span className="text-gray-600 mb-2">Member since {fullDate}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
