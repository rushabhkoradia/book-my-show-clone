import React from "react";
import Poster from "../RoundCarousel/RoundPoster.component";
import ProfileSettings from "../../config/ProfileCarousel.config";

import Slider from "react-slick";

const ProfileSlider = (props) => {
	return (
		<>
			<div className="flex flex-col items-start py-4">
				<h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800" }`}>
					{ props.title }
				</h3>
				<p className={`text-sm ${ props.isDark ? "text-white" : "text-gray-800" }`}>
					{ props.subtitle }
				</p>
			</div>
			<Slider { ...ProfileSettings }>
				{ props.images.map((image)=> (
					<Poster { ...image } isDark={ props.isDark }/>
				)) }
			</Slider>
		</>
	);
};

export default ProfileSlider;