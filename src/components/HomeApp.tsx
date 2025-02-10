// import { appleStoreImg, googleStoreImg } from "../assets/assetsData"

import { appleStoreImg, googleStoreImg } from "../assets/assetsData";

const HomeApp = () => {

    return (
        <div className={`w-full bg-transparent bg-[url('mobile-sm.png')] md:bg-[url('mobile.png')] bg-no-repeat bg-center md:bg-right pb-20`}>
            <div className="w-[80%] h-[180vh] md:h-[80%] mx-auto flex justify-between items-center">
                {/* left section  */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-between justify-items-center">
                    <div className="mt-28 md:mtt-20">
                        <h1 className="text-2xl md:text-5xl font-bold text-[#3A643B] text-center md:text-left ">
                            Amrutam home App
                        </h1>

                        <p className="text-gray-600 my-4 md:my-8 text-center md:text-left">The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-20 text-center md:text-left">Get a diet & lifestyle consultation with ayurvedic experts across the globe </h2>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">Get the App now</h2>

                        {/* apps image  */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <img src={appleStoreImg} alt="appleStoreImg" />
                            <img src={googleStoreImg} alt="googleStoreImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeApp