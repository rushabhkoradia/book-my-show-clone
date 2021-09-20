import React from 'react';
import MovieHero from '../components/MovieHero/MovieHero.component';
import ProfileSlider from "../components/RoundCarousel/ProfileCarousel.component";
import CastPoster from "../config/CastPoster.config";
import CrewPoster from "../config/CrewPoster.config"

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_1GoN3LSvf7kWUs",
        amount: 50000,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done");
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

const MoviePage = () => {
    return (
        <>
            <div>
                <MovieHero />
                <div className="container mx-auto my-6 lg:ml-16 lg:w-2/3">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-gray-900 font-bold text-2xl">About the movie</h2>
                        <p className="text-sm text-gray-900">Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                    </div>

                    <div className="my-8">
                        <hr />
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <h1 className="text-gray-900 font-bold text-2xl">Applicable Offers</h1>
                        
                        <div className="flex items-start gap-3 bg-red-100 px-3 py-2 border-yellow-300 border-2 border-dashed rounded-lg w-96">
                            <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052" alt="Filmy Pass Logo" className="w-5 h-5" />
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-900 font-semibold text-md">Filmy Pass</h3>
                                <p className="text-sm text-gray-700">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
                        Book tickets
                    </button>
                    <div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start">
					<h2 className="font-bold text-2xl">Cast</h2>
					<div className="container mx-auto pr-4">
						<ProfileSlider images={CastPoster} title="" isDark={false}/>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="font-bold text-2xl">Crew</h2>
					<div className="container mx-auto pr-4">
						<ProfileSlider images={CrewPoster} title="" isDark={false}/>
					</div>
				</div>
                </div>
            </div>
        </>
    );
};

export default MoviePage;