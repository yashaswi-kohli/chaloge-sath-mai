import tick from "../../Images/blueTick.svg"
import cross from "../../Images/icons8-cross-48.png"
import { currentuser } from '../../services/user.api';
import { prefrence } from "../../utils/prefrenceOptions";
import React, { useEffect, useRef, useState } from 'react';
import ProfileSkeleon from '../../pages/skeleton/ProfileSkeleon';

const ProfileCard = () => {

	const user = useRef();
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
		user.p = user.current.prefrence;
		user.avatar = user.current.avatar;
		user.created = Date(user.current.createdAt);
		user.rp = user.current.ridesPublished;
		user.ratingStar = user.current.ratingS;
		user.ev = user.current.isEmailVerified;
		user.totalRating = user.current.nRating;
		user.nb = user.current.isNumberVerified;
		user.name = user.current.firstName + " " + user.current.lastName;

		const bYear = parseInt(user.current.birthdate.slice(0, 5)), bMonth = parseInt(user.current.birthdate.slice(6, 8)), bDay = parseInt(user.current.birthdate.slice(9, 11));

		user.age = tYear - bYear;
		if (tMonth < bMonth || (tMonth === bMonth && tDay < bDay)) user.age = user.age - 1;

		setLoading(false);
		user.fullDate = (user.created.slice(4, 8)) + (user.created.slice(11, 15));
	}

	

	if (loading) {
		return <ProfileSkeleon />;
	}

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
			<div className="flex items-center space-x-6">
				<img
					src={user.avatar}
					alt="Profile"
					className="w-24 h-24 rounded-full border-2 border-blue-500"
				/>
				<div className="space-y-2">
				<h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
				<p className="text-gray-600">{user.age} y/o</p>
				</div>
			</div>
			{user.ratingStar ? 
				<div className="space-y-2">	
					<div className="flex items-center text-gray-600">
						<span className="material-icons">star</span>
						<span className="ml-1">{user.ratingStar}/5 — 3 ratings</span>
					</div>
					<div className="flex items-center text-gray-600 mt-2">
						<span className="material-icons">emoji_events</span>
						<span className="ml-1"> {user.ratingStar}/5 - {user.ratingNumber}</span>
					</div>
				</div>
			: 
				<div></div>
			}

			<hr className="my-4"/>
			<div className="space-y-2">
				<div className="flex items-center text-gray-600">
					{user.ev ? 
						<img src={tick} alt="Icon 3" className="w-6 h-6" />
						:
						<img src={cross} alt="Icon 3" className="w-6 h-6" />
					}
					<span className="ml-2">Confirmed email</span>
				</div>
				<div className="flex items-center text-gray-600">
					{user.nb ? 
						<img src={tick} alt="Icon 3" className="w-6 h-6" />
						:
						<img src={cross} alt="Icon 3" className="w-6 h-6" />
					}
					<span className="ml-2">Confirmed phone number</span>
				</div>
			</div>

			<hr className="my-4"/>
			<div className="space-y-2">
				<h3 className="text-xl font-semibold text-gray-800 mb-6">About {user.name}</h3>
				{user.about ? 
					<div className="space-y-2">{user.about}</div>
					:
					<div></div>	
				}
				{
					user.p ?
						<div>
							<div className="flex items-center text-gray-600">
								<img src={prefrence[user.p[0]].logo} alt="Icon 3" className="w-6 h-6 mr-5 mb-2" />
								<span className="text-gray-600 mb-2">{prefrence[user.p[0]].about}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<img src={prefrence[user.p[1]].logo} alt="Icon 3" className="w-6 h-6 mr-5 mb-2" />
								<span className="text-gray-600 mb-2">{prefrence[user.p[1]].about}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<img src={prefrence[user.p[2]].logo} alt="Icon 3" className="w-6 h-6 mr-5 mb-2" />
								<span className="text-gray-600 mb-2">{prefrence[user.p[2]].about}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<img src={prefrence[user.p[3]].logo} alt="Icon 3" className="w-6 h-6 mr-5 mb-2" />
								<span className="text-gray-600 mb-2">{prefrence[user.p[3]].about}</span>
							</div>
						</div>
					: 	<div></div>
				}
			</div>

			<hr className="my-4"/>
			<div className="space-y-2">
				<div>
					<span className="text-gray-600 mb-2">{user.rp} Rides Published</span>
				</div>
				<div>
					<span className="text-gray-600 mb-2">Member since {user.fullDate}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
