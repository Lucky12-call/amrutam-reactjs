import { LuFacebook, LuInstagram, LuYoutube, LuTwitter, LuLinkedin } from "react-icons/lu";
import { FaPinterestP } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row justify-center md:items-center bg-[#3A643B2E] p-5">
            {/* contact detail  */}
            <div className="block md:hidden">
                <h2 className="text-lg text-[#3A643B] font-bold">Get in touch</h2>
                <p className="text-sm">support@amrutam.co.in</p>
                <p className="text-sm"> Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                <p className="text-sm">+91 9713171999</p>
            </div>

            {/* social media icons */}
            <div className="flex items-center gap-2 mt-4 md:hidden">
                <LuFacebook className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
                <LuInstagram className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
                <LuYoutube className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
                <LuTwitter className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
                <LuLinkedin className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
                <FaPinterestP className="rounded-full h-8 w-8 p-1 bg-[#3A643B] text-gray-300" />
            </div>

            <div className="mt-6 mb-3 ">
                <h2 className="text-lg text-[#3A643B] font-bold">Information</h2>
                <p>
                    <a href="#" className="text-sm">About Us</a>
                </p>
                <p>
                    <a href="#" className="text-sm">Terms and Conditions</a>
                </p>
                <p>
                    <a href="#" className="text-sm">Privacy Policy</a>
                </p>
                <p>
                    <a href="#" className="text-sm">Privacy Policy for Mobile Apps</a>
                </p>
                <p>
                    <a href="#" className="text-sm">Privacy Policy for Mobile Apps</a>
                </p>
                <p>
                    <a href="#" className="text-sm">Shipping and Returns Policy</a>
                </p>
                <p>
                    <a href="#" className="text-sm">International Delivery</a>
                </p>
                <p>
                    <a href="#" className="text-sm">For Businesses, Hotels and Resorts</a>
                </p>
            </div>

            <h2 className="text-lg text-[#3A643B] font-bold block md:hidden">Subscribe to our Newsletter and join Amrutam Family today!</h2>

            <div className="w-full flex justify-between items-center mt-5 md:hidden">
            <input type="text" placeholder="Your Email Address" className="px-3 py-2 rounded-tl-full rounded-bl-full bg-transparent border border-black" />
            <button className="px-3 py-2 bg-black text-white rounded-br-full rounded-tr-full border border-black">Subscribe</button>
            </div>
        </div>
    )
}

export default Contact