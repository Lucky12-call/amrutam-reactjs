import { homeData } from "./data/homeData";
import { heroImg, heroMobileImg } from "../assets/assetsData";

interface HomeData {
    id: number;
    title: string;
    image: string;
}

const Home = () => {
    return (
        <div className="bg-[#FFF7E2] min-h-screen w-full mx-auto flex flex-col justify-center pt-20">
            <div className="w-full h-auto md:h-[639px] flex flex-col md:flex-row justify-between relative">

                {/* Left Section */}
                <div className="w-full h-full flex flex-col justify-center px-5 md:px-8 bg-transparent bg-gradient-to-r from-[#000000] via-[#000000] to-transparent absolute top-0 left-0 right-0 z-20">
                    {/* Text Content */}
                    <div className="w-full text-left text-white md:w-[80%] px-0 md:px-20">
                        <p className="text-md md:text-2xl font-normal leading-6 md:leading-7 font-[Nexa Light] text-gray-200">
                            Namaste, Welcome to Amrutam
                        </p>


                        <h1 className="text-2xl md:text-5xl font-semibold md:leading-relaxed mt-4">
                            Step into Holistic Healing With{" "}
                            <span className="underline underline-offset-8 md:leading-relaxed">ayurveda</span>. Book Consultation With Certified Experts.
                        </h1>

                        <p className="mt-4 text-sm md:text-xl text-gray-300">
                            Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted Ayurvedic doctors anytime, anywhere.
                        </p>
                        <button className="mt-10 px-6 py-3 md:px-10 md:py-5 text-sm md:text-xl bg-[#3A643B] text-white rounded-xl uppercase font-semibold">
                            Book an Appointment
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 h-full md:absolute md:top-0 md:right-0 z-10">
                    {/* Desktop Image */}
                    <img
                        src={heroImg}
                        alt="hero-img"
                        className="w-full h-full object-cover hidden md:block"
                    />

                    {/* Mobile Image */}
                    <img
                        src={heroMobileImg}
                        alt="hero-mobile-img"
                        className="w-full h-full object-cover block md:hidden"
                    />

                    {/* Shadow Div */}
                    <div className="h-full w-full hero-mobile-gradient absolute top-0 left-0 right-0 z-20 md:hidden pointer-events-none"></div>
                </div>
            </div>

            {/* Bottom Content */}
            <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
                {homeData.map((data: HomeData) => (
                    <div key={data.id} className="w-80 flex justify-center items-center">
                        <img src={data.image} alt={data.title} className="" />
                        <h2 className="text-lg font-bold">{data.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

