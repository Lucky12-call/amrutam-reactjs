import { benefitData } from "./data/benefitData";
import { girlImg } from "../assets/assetsData";

const Benefits = () => {
  return (
    <div className="bg-white pt-20">
      {/* content section  */}
      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold text-[#3A643B] text-center underline underline-offset-4 decoration-[#abd9ab] ">
          Discover {"Ayurveda’s"} magic with us
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 text-center my-10">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony <br className="max-md:hidden" /> and vitality. It's like a
          journey to better health using ancient wisdom,{" "}
          <br className="max-md:hidden" /> a totally effective approach for a
          better life.{" "}
        </p>
      </div>

      <div className="max-md:w-full w-[85%] mx-auto flex max-md:flex-wrap gap-5 justify-between items-center ">
        {/* left section */}
        <div className="max-md:w-full flex flex-col items-center justify-center gap-5 md:gap-16 order-2 md:order-1">
          {/* benefit cart-1  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex flex-col-reverse md:flex-row items-center gap-5 md:-mr-24 p-5 md:p-0">
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center  md:text-end">{benefitData[0].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center  md:text-end">{benefitData[0].description}</p>
            </div>
            <img src={benefitData[0].image} alt={`image-${benefitData[0].id}`} />
          </div>

          {/* benefit cart-2  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex flex-col-reverse md:flex-row items-center gap-5 p-5 md:p-0">
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center  md:text-end">{benefitData[2].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center  md:text-end">{benefitData[2].description}</p>
            </div>
            <img src={benefitData[2].image} alt={`image-${benefitData[2].id}`} />
          </div>

          {/* benefit cart-3  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex max-md:flex-wrap flex-col-reverse md:flex-row items-center gap-5 md:-mr-24 p-5 md:p-0">
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center  md:text-end">{benefitData[4].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center  md:text-end">{benefitData[4].description}</p>
            </div>
            <img src={benefitData[4].image} alt={`image-${benefitData[4].id}`} />
          </div>
        </div>

        {/* middle section */}
        <img src={girlImg} alt="girl_img" className="order-1 md:order-2" />

        {/* right section */}
        <div className="max-md:w-full flex flex-col items-center justify-center gap-5 md:gap-16 order-3">
          {/* benefit cart-4  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex flex-col md:flex-row items-center gap-5 md:-ml-24 p-5 md:p-0">
            <img src={benefitData[1].image} alt={`image-${benefitData[1].id}`} />
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center md:text-start">{benefitData[1].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center md:text-start">{benefitData[1].description}</p>
            </div>
          </div>

          {/* benefit cart-5  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex flex-col md:flex-row items-center gap-5  p-5 md:p-0">
            <img src={benefitData[3].image} alt={`image-${benefitData[3].id}`} />
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center md:text-start">{benefitData[3].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center md:text-start">{benefitData[3].description}</p>
            </div>
          </div>

          {/* benefit cart-6  */}
          <div className="w-full h-64 md:h-auto md:w-[350px] flex flex-col md:flex-row items-center gap-5 md:-ml-24 p-5 md:p-0">
            <img src={benefitData[5].image} alt={`image-${benefitData[5].id}`} />
            <div className="">
              <h2 className="text-lg md:text-xl font-bold text-center md:text-start">{benefitData[5].title}</h2>
              <p className="text-sm md:text-base text-zinc-600 text-center md:text-start">{benefitData[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
