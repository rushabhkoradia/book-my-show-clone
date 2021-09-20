import React from "react";
import Slider from "react-slick";
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

const EntertainmentCard = (props) => {
  return (
    <>
    <div className="w-full px-2">
    <img
        className="w-full h-full rounded-xl"
        src={props.src}
        alt="Entertainment Image"
    />
    </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-6,4,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png"
  ];

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    nextArrow: <NextArrow pos="140px"/>,
    prevArrow: <PrevArrow pos="140px"/>,
    responsive: [
		{
			breakpoint: 1024,
			settings: {
				nextArrow: <NextArrow pos="80px"/>,
    		prevArrow: <PrevArrow pos="80px"/>
			}
		},
		{
			breakpoint: 600,
			settings: {
				nextArrow: <NextArrow pos="30px"/>,
    		prevArrow: <PrevArrow pos="30px"/>
			}
		},
		{
			breakpoint: 400,
			settings: {
				nextArrow: <NextArrow pos="20px"/>,
    		prevArrow: <PrevArrow pos="20px"/>
			}
		}
	]
  }

  return (
    <>
    <Slider {...settings}>
    {EntertainmentImage.map((image) => (
      <EntertainmentCard src={image} />
    ))}
    </Slider>
    </>
  )
}

export default EntertainmentCardSlider;