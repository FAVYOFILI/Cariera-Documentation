import React from "react";
import image from "./assets/image.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className=" h-[400px] lg:h-[450px] w-full bg-cover bg-center flex flex-col items-center justify-center gap-5"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-[30px] md:text-[50px] font-[500] text-[white] flex flex-col text-center w-[90%]">
        Cariera Documentation
        <span className="text-[17px] md:text-[22px] text-[white]">
          Search through our knowledge base or submit a ticket to get the
          answers you need.
        </span>
      </h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-[80%] pl-[15px] py-[10px] lg:w-[60%] lg:py-[15px] lg:pl-[20px] rounded bg-[white] text-[17px] text-[black] outline-0"
      />
    </div>
  );
};

export default Hero;
