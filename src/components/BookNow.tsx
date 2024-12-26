
const BookNow = () => {
    return (
        <div className="w-full h-[80vh] relative">
            {/* Background Image for Desktop */}
            <div
                className="hidden md:block h-full absolute inset-0 bg-[url('shiraf.png')] bg-cover bg-center opacity-100 pointer-events-none"
            ></div>

            {/* Background Image for Mobile */}
            <div
                className="block md:hidden h-full absolute inset-0 bg-[url('shiraf-mobile.png')] bg-cover bg-center opacity-100 pointer-events-none"
            ></div>

            {/* Content */}
            <div className="h-full w-full relative z-10 flex flex-col justify-center items-center gap-10 md:gap-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold text-[#3A643B] pb-5 md:pb-10">
                    Ready to restore harmony in <br className="max-md:hidden" /> your mind, body and spirit?
                </h1>

                <button className="px-6 md:px-10 py-3 md:py-5 text-xl font-semibold text-white rounded-2xl bg-[#3A643B]">
                    Book a consultation
                </button>
            </div>
        </div>


    )
}

export default BookNow