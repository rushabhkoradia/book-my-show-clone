import React from "react";
import {FaHeart} from "react-icons/fa";
import { IconContext } from "react-icons";
import {BiChevronRight, BiShareAlt} from "react-icons/bi"


const MovieHero = () => {
	return (
		<>
            {/*For small Screen*/}
            <div className="md:hidden">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
            </div>
            
            {/*For Medium Screen*/}
            <div className="hidden md:block lg:hidden">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
            </div>
            
            {/*For Large Screen*/}
            <div className="hidden lg:block">
                <div className="w-full bg-cover bg-no-repeat bg-center p-6" style={{ backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url('https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg')" }} >
                    <div className="relative flex flex-row flex-start">
                        <div className="w-60 m-5 top-10">
                            <img
                                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                                alt="poster"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="w-1/3 m-3 flex flex-col">
                            <h1 className="text-3xl text-white font-bold my-4">Shang-Chi and the Legend of the Ten Rings</h1>
                            <div className="my-3 flex flex-row items-center gap-3">
                                <IconContext.Provider value={{ color:"#EB4E62", className:"global-class-name" }}>
                                    <FaHeart size={ 23 }/>
                                </IconContext.Provider>
                                <h1 className="text-xl text-white font-semibold">91%</h1>
                                <div className="flex flex-row flex-start items-center">
                                    <h3 className="text-sm text-white">43.5K ratings</h3>
                                    <IconContext.Provider value={{color:"white", className:"global-class-name"}}>
                                        <BiChevronRight />
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between px-5 py-2 my-2 rounded-md" style={{ backgroundColor: "#333333" }}>
                                <div className="flex flex-col">
                                    <h2 className="text-white font-bold">Add your rating & review</h2>
                                    <h3 className="text-1xl" style={{ color: "#CCCAC7" }}>Your ratings matter</h3>
                                </div>
                                <button className="bg-white px-3 py-1 rounded-lg text-lg font-semibold" style={{ color: "#333333" }}>
                                    Rate now
                                </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-white w-max px-2 mt-2">
                                    <a className="text-1xl text-black font-semibold hover:underline" href="#">2D, </a>
                                    <a className="text-1xl text-black font-semibold hover:underline" href="#">3D, </a>
                                    <a className="text-1xl text-black font-semibold hover:underline" href="#">IMAX 2D, </a>
                                    <a className="text-1xl text-black font-semibold hover:underline" href="#">MX4D, </a>
                                    <a className="text-1xl text-black font-semibold hover:underline" href="#">4DX</a>
                                </div>
                                <div className="bg-white w-max px-2">
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">English, </a>
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">Kannada, </a>
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">Tamil, </a>
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">Hindi, </a>
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">Telugu, </a>
                                    <a className="text-1xl text-black font-medium hover:underline" href="#">Malayalam</a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-white mt-2">2h 12m • Action, Adventure, Fantasy • UA • 3 Sep, 2021</h2>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 m-5">
                            <button className="flex flex-row items-center text-md bg-black px-3 py-1 bg-opacity-40 rounded-md text-white font-semibold">
                                <BiShareAlt size={35} className="pr-2"/>
                                    Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};

export default MovieHero;