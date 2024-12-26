
const OurApproach = () => {
    
    return (
        <div className="w-full bg-white  py-20 px-5">
            <div className="w-full md:w-[85%] mx-auto ">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3A643B] text-center underline underline-offset-4 decoration-[#abd9ab] pb-5 md:pb-10">
                    Our ayurvedic approach
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 text-center mb-20">
                    At Amrutam we follow a unique and personalized approach to healing. Our expert <br className="max-md:hidden" /> practitioners begin each treatment process by conducting a thorough analysis of the <br className="max-md:hidden" /> patient’s body type, medical history, and current health conditions.
                </p>

                <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                    {/* first div  */}
                    <div className="h-80 w-full md:w-[27%] flex flex-col  items-center bg-[#FFF7E2]  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="min-h-24 min-w-24 flex justify-center items-center text-3xl md:text-5xl text-center  font-semibold bg-[#3A643BA8] text-white rounded-full my-5">1</h1>

                        <h2 className="text-lg md:text-2xl font-bold text-[#3A643B] text-center">Make Appointment</h2>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">You must make an appointment in advance, to choose the service and date.</p>
                    </div>

                    {/* second div  */}
                    <div className="h-80 w-full md:w-[27%] flex flex-col  items-center bg-[#FFF7E2]  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="min-h-24 min-w-24 flex justify-center items-center text-3xl md:text-5xl text-center  font-semibold bg-[#3A643BA8] text-white rounded-full my-5">2</h1>

                        <h2 className="text-lg md:text-2xl font-bold text-[#3A643B] text-center">Consultations
                        </h2>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">YThe next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                    </div>

                    {/* third div  */}
                    <div className="h-80 w-full md:w-[27%] flex flex-col  items-center bg-[#FFF7E2]  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="min-h-24 min-w-24 flex justify-center items-center text-3xl md:text-5xl text-center  font-semibold bg-[#3A643BA8] text-white rounded-full my-5">3</h1>

                        <h2 className="text-lg md:text-2xl font-bold text-[#3A643B] text-center">Treatment Planning</h2>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                    </div>

                    {/* second div  */}
                    <div className="h-80 w-full md:w-[27%] flex flex-col  items-center bg-[#FFF7E2]  border-t-[6px] border-[#3A643B] rounded-2xl p-5">
                        <h1 className="min-h-24 min-w-24 flex justify-center items-center text-3xl md:text-5xl text-center  font-semibold bg-[#3A643BA8] text-white rounded-full my-5">4</h1>

                        <h2 className="text-lg md:text-2xl font-bold text-[#3A643B] text-center">Maintenance</h2>

                        <p className="text-md md:text-lg text-zinc-600 text-center mt-5">These visits allow for assessment of progress, adjustments to the treatment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApproach