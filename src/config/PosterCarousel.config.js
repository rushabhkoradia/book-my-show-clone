import React from 'react'
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
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
					<div>
						<BiChevronRight />
					</div>
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

const settings = {
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    nextArrow: <NextArrow pos="140px"/>,
    prevArrow: <PrevArrow pos="140px"/>,
    responsive: [
		{
			breakpoint: 1024,
			settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
				nextArrow: <NextArrow pos="80px"/>,
    		    prevArrow: <PrevArrow pos="80px"/>
			}
		},
		{
			breakpoint: 600,
			settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
				nextArrow: <NextArrow pos="30px"/>,
    		    prevArrow: <PrevArrow pos="30px"/>
			}
		},
		{
			breakpoint: 400,
			settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
				nextArrow: <NextArrow pos="20px"/>,
    		    prevArrow: <PrevArrow pos="20px"/>
			}
		}
	]
}

export default settings;