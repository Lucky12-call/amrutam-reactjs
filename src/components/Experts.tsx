import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { girlImg_3 } from "../assets/assetsData";


const Stories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        pauseOnHover: false,
        spacing: 10,
        responsive: [
            {
                breakpoint: 600, // At screens <= 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full mx-auto py-20 bg-white">
            <div className="w-full md:w-[85%] mx-auto px-5">

                <h1 className="text-3xl md:text-5xl font-bold text-[#3A643B] text-center underline underline-offset-4 decoration-[#abd9ab] pb-5 md:pb-20">
                    Meet our Ayurveda experts
                </h1>
                <Slider {...settings}>
                    {/* card-1  */}
                    {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="h-96 md:h-[450px] max-w-64 md:max-w-72 flex flex-col items-center bg-[#FFF7E2] rounded-3xl shadow-xl mx-4 py-5 md:py-10 px-5 relative">

                            {/* image and name div  */}
                            <div className="w-[150px] justify-center relative mb-2 md:mb-5 ml-10 md:ml-12">
                                <img src={girlImg_3} alt="girl-img-3" className="rounded-full" />
                                <div className="w-20 flex justify-center items-center gap-2 rounded-full bg-zinc-950 text-white p-1 absolute -bottom-1 left-[22%]">
                                    4.5{" "}<FaStar size={20} color="#EEDE4D" />
                                </div>
                            </div>


                            <h2 className="text-lg md:text-xl text-center  font-semibold mb-1 md:mb-5">Dr. Vaishali sharma</h2>
                            <p className="text-sm md:text-md text-gray-500 text-center px-4 ">Ayurveda Practitioner {"(BAMS, MD)"}</p>
                            <p className="flex justify-center items-center gap-2 text-sm md:text-lg text-gray-500 px-4"><LuGraduationCap size={24} /> 25 years of experience</p>

                            <a href="#" className="px-5 py-1 flex justify-center items-center gap-1 bg-[#3A643B1F] rounded-full mt-2 md:mt-4"><IoIosLink />Skin Specialist</a>

                            <button className="w-full py-3 md:py-5 text-lg md:text-xl bg-[#3A643B] text-white font-semibold absolute bottom-0 left-0 right-0 rounded-bl-3xl rounded-br-3xl">Book a session</button>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center items-center mt-20">
                    <button className="flex justify-center items-center gap-2 px-5 md:px-10 py-2 md:py-4 text-xl md:text-2xl bg-[#DBE3DC63] text-[#3A643B] font-semibold rounded-xl border border-[#3A643B] text-center">Find more experts <MdKeyboardArrowRight size={32} /></button>
                </div>
            </div>
        </div>
    );
};

export default Stories;

