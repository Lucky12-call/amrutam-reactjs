import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";


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
        <div className="w-full mx-auto py-20 bg-transparent">
            <div className="w-full md:w-[85%] mx-auto px-5">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3A643B] text-center underline underline-offset-4 decoration-[#abd9ab] pb-5 md:pb-10">
                    Stories from our valued customers!
                </h1>
                <Slider {...settings} className="flex gap-x-8">
                    {/* card-1  */}
                    <div className="h-80 md:h-96 max-w-[275px] md:max-w-[350px] bg-white rounded-3xl shadow-xl mx-4">
                        <h1 className="text-lg font-semibold bg-[#ECE7FF] rounded-tr-3xl rounded-tl-3xl px-8 py-3 ">Consulted for Skin</h1>

                        {/* image and name div  */}
                        <div className="px-3 md:px-6 py-4 md:py-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 md:h-16 w-10 md:w-16 bg-[#515151] rounded-full"></div>
                                    <div className="">
                                        <h2 className="text-lg md:text-xl ">Sophie Moore</h2>
                                        <span className="text-sm md:text-lg text-gray-500">Chennai</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 -mt-6">17/02/2024</span>
                            </div>
                        </div>

                        {/* stars div  */}
                        <div className="flex items-center gap-2 px-10 mb-2">
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold px-4 mb-2">“One of a kind service”</h2>
                        <p className="text-sm md:text-lg text-gray-500 px-4">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>

                    </div>

                    {/* card-2  */}
                    <div className="h-80 md:h-96 max-w-[275px] md:max-w-[350px] bg-white rounded-3xl shadow-xl mx-4">
                        <h1 className="text-lg font-semibold bg-[#ECFEE7] rounded-tr-3xl rounded-tl-3xl px-8 py-3 ">Consulted for hair</h1>

                        {/* image and name div  */}
                        <div className="px-3 md:px-6 py-4 md:py-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 md:h-16 w-10 md:w-16 bg-[#515151] rounded-full"></div>
                                    <div className="">
                                        <h2 className="text-lg md:text-xl ">Sophie Moore</h2>
                                        <span className="text-sm md:text-lg text-gray-500">Mumbai</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 -mt-6">17/02/2024</span>
                            </div>
                        </div>

                        {/* stars div  */}
                        <div className="flex items-center gap-2 px-10 mb-2">
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold px-4 mb-2">“One of a kind service”</h2>
                        <p className="text-sm md:text-lg text-gray-500 px-4">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>

                    </div>

                    {/* card-3  */}
                    <div className="h-80 md:h-96 max-w-[275px] md:max-w-[350px] bg-white rounded-3xl shadow-xl mx-4">
                        <h1 className="text-lg font-semibold bg-[#ECE7FF] rounded-tr-3xl rounded-tl-3xl px-8 py-3 ">Consulted for hair</h1>

                        {/* image and name div  */}
                        <div className="px-3 md:px-6 py-4 md:py-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 md:h-16 w-10 md:w-16 bg-[#ECFEE7] rounded-full"></div>
                                    <div className="">
                                        <h2 className="text-lg md:text-xl ">Sophie Moore</h2>
                                        <span className="text-sm md:text-lg text-gray-500">Mumbai</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 -mt-6">17/02/2024</span>
                            </div>
                        </div>

                        {/* stars div  */}
                        <div className="flex items-center gap-2 px-10 mb-2">
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold px-4 mb-2">“One of a kind service”</h2>
                        <p className="text-sm md:text-lg text-gray-500 px-4">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>

                    </div>

                    {/* card-4  */}
                    <div className="h-80 md:h-96 max-w-[275px] md:max-w-[350px] bg-white rounded-3xl shadow-xl mx-4">
                        <h1 className="text-lg font-semibold bg-[#ECE7FF] rounded-tr-3xl rounded-tl-3xl px-8 py-3 ">Consulted for Skin</h1>

                        {/* image and name div  */}
                        <div className="px-3 md:px-6 py-4 md:py-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 md:h-16 w-10 md:w-16 bg-[#515151] rounded-full"></div>
                                    <div className="">
                                        <h2 className="text-lg md:text-xl ">Sophie Moore</h2>
                                        <span className="text-sm md:text-lg text-gray-500">Chennai</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 -mt-6">17/02/2024</span>
                            </div>
                        </div>

                        {/* stars div  */}
                        <div className="flex items-center gap-2 px-10 mb-2">
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold px-4 mb-2">“One of a kind service”</h2>
                        <p className="text-sm md:text-lg text-gray-500 px-4">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>

                    </div>

                    {/* card-5  */}
                    <div className="h-80 md:h-96 max-w-[275px] md:max-w-[350px] bg-white rounded-3xl shadow-xl mx-4">
                        <h1 className="text-lg font-semibold bg-[#ECFEE7] rounded-tr-3xl rounded-tl-3xl px-8 py-3 ">Consulted for hair</h1>

                        {/* image and name div  */}
                        <div className="px-3 md:px-6 py-4 md:py-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 md:h-16 w-10 md:w-16 bg-[#515151] rounded-full"></div>
                                    <div className="">
                                        <h2 className="text-lg md:text-xl ">Sophie Moore</h2>
                                        <span className="text-sm md:text-lg text-gray-500">Mumbai</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 -mt-6">17/02/2024</span>
                            </div>
                        </div>

                        {/* stars div  */}
                        <div className="flex items-center gap-2 px-10 mb-2">
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                            <FaStar size={20} color="#EEDE4D" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold px-4 mb-2">“One of a kind service”</h2>
                        <p className="text-sm md:text-lg text-gray-500 px-4">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>

                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Stories;

