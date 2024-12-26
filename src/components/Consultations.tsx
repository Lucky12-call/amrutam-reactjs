import { womenImg, girlImg_2, tabletsImg } from "../assets/assetsData";

const Consultations = () => {
    return (
        <div className="w-full md:w-[85%] mx-auto py-20 bg-transparent px-5 md:px-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3A643B] text-center underline underline-offset-4 decoration-[#abd9ab] pb-5 md:pb-10">
                What sets Ayurvedic consultations apart?
            </h1>

            {/* main section */}
            <div className="w-full mt-10">
                {/* upper section */}
                <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* first div  */}
                    <div className="h-[286px] w-full md:w-[45%] bg-white border-t-[6px] border-[#3A643B] rounded-2xl p-2 md:p-8">
                        <h1 className="text-2xl md:text-4xl font-bold text-[#3A643B] text-center mt-5">
                            स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
                        </h1>

                        <p className="text-md md:text-lg text-zinc-600 text-center my-5 md:my-10">[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>

                    </div>

                    {/* second div  */}
                    <img src={womenImg} alt="women_img" className="h-[286px] w-[30] rounded-2xl " />

                    {/* third div  */}
                    <div className="h-[286px] w-full md:w-[25%]  bg-white  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="text-xl md:text-2xl text-center font-semibold text-[#3A643B] mt-5">Precise Diagnosis</h1>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                    </div>
                </div>

                {/* bottom section  */}
                <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                    {/* first div  */}
                    <div className="h-[286px] w-full md:w-[25%]  bg-white  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="text-xl md:text-2xl text-center font-semibold text-[#3A643B] mt-5">Zero side-effects</h1>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">Ayurveda's core Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</p>
                    </div>

                    {/* second div  */}
                    <img src={tabletsImg} alt="women_img" className="h-[286px] w-full md:w-[25%] rounded-2xl" />

                    {/* third div  */}
                    <div className="h-[286px] w-full md:w-[25%]  bg-white  border-t-[6px] border-[#3A643B] rounded-2xl p-4">
                        <h1 className="text-xl md:text-2xl text-center font-semibold text-[#3A643B] mt-5">Individual Treatment
                        </h1>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">Ayurveda's core all Treatments are personalized based on a person's unique constitution and health concerns.</p>
                    </div>

                    {/* second div  */}
                    <img src={girlImg_2} alt="women_img" className="h-[286px] w-full md:w-[25%] rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Consultations