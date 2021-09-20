import React from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi"
import { IconContext } from "react-icons";

export const NextArrowLg = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0009",
					width:"55px",
					height:"45px",
					position:"absolute",
					right:"0",
					top:"0",
					transform:"translateY(170px)",
					borderRadius:"5px 0px 0px 5px",
					fontSize:"43px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
				<div style={{float:"right", paddingRight:"5px"}}>
					<BiChevronRight />
				</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

export const PrevArrowLg = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0009",
					width:"55px",
					height:"45px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:"translateY(170px)",
					borderRadius:"0px 5px 5px 0px",
					fontSize:"43px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
				<div style={{float:"left", paddingLeft:"5px"}}>
					<BiChevronLeft />
				</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

export const NextArrow = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0009",
					width:"55px",
					height:"45px",
					position:"absolute",
					right:"0",
					top:"0",
					transform:"translateY(120px)",
					borderRadius:"5px 0px 0px 5px",
					fontSize:"43px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
				<div style={{float:"right", paddingRight:"5px"}}>
					<BiChevronRight />
				</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

export const PrevArrow = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0009",
					width:"55px",
					height:"45px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:"translateY(120px)",
					borderRadius:"0px 5px 5px 0px",
					fontSize:"43px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
				<div style={{float:"left", paddingLeft:"5px"}}>
					<BiChevronLeft />
				</div>
				</IconContext.Provider>
			</div>
		</>
	);
}