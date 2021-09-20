import React from "react";

const RoundPoster = (props) => {
	return(
		<>
			<div className="flex flex-col items-center gap-2 px-3">
				<div className="w-28 h-8 md:h-28">
					<img src={props.src} alt={props.title} className="w-full h-full rounded-full"/>
				</div>
				<h3 className="text-lg font-semibold text-center">
					{props.title}
				</h3>
				<p className="text-sm text-center text-gray-700">
					{props.subtitle}
				</p>
			</div>
		</>
	);
};

export default RoundPoster;