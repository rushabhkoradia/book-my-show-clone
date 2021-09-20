import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IconContext } from "react-icons";

function NextArrow(props) {
	return (
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#666666",
					width:"40px",
					height:"40px",
					position:"absolute",
					right:"0",
					top:"0",
					transform:`translateY(${props.pos})`,
					borderRadius:"50%",
					fontSize:"40px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
						<BiChevronRight />
				</IconContext.Provider>
			</div>
		</>
	);
}

function PrevArrow(props) {
	return (
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#666666",
					width:"40px",
					height:"40px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:`translateY(${props.pos})`,
					borderRadius:"50%",
					fontSize:"40px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
					<div>
						<BiChevronLeft />
					</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

const ProfileSettings = {
	infinite: true,
	autoplay: false,
	slidesToShow: 3,
	slidesToScroll: 2,
	InitialSlide: 0,
	nextArrow: <NextArrow pos="45px"/>,
	prevArrow: <PrevArrow pos="45px"/>,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				nextArrow: <NextArrow pos="130px"/>,
				prevArrow: <PrevArrow pos="130px"/>
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				nextArrow: <NextArrow pos="130px"/>,
				prevArrow: <PrevArrow pos="130px"/>
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				nextArrow: <NextArrow pos="100px"/>,
				prevArrow: <PrevArrow pos="100px"/>
			}
		}
	]
};

export default ProfileSettings;