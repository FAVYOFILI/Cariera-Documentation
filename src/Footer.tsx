

// const Footer = () => {
//   return (
//     <footer className="bg-white h-[555px] w-[100%] justify-between items-center flex flex-col">
//       <div className="w-[100%] h-[185px] bg-[#24a3a4] flex justify-center items-center flex-col">
//         <div className="flex justify-center items-center flex-col text-[24px] text-white leading-[26px] font-medium">
//           Feel free to open a support ticket with your purchase code if you need
//           any further help.
//         </div>
//         <button className="w-[177px] h-[39px] bg-black justify-center items-center flex text-white font-normal text-[18px leading-[29px] mt-[20px] rounded-md">
//           Support Ticket
//         </button>
//       </div>
//       <div className="w-[100%] flex justify-between items-center flex-col">
//         <div className=" flex items-center justify-center  w-[70%]">
//           About Cariera Cariera is a complete Job Board theme for WordPress
//           theme and does not require extra plugins.
//         </div>
//         <div className="">
//           <ul>
//             <h1> Support Links</h1>
//             <li>Live Demo</li>
//             <li>Theme Page</li>
//             <li>Support Site</li>
//             <li>Facebook Group</li>
//           </ul>
//         </div>
//         <div className=""></div>
//         <div className="w-[100%] bg-black justify-center items-center flex">
//           <div className="h-[66px] bg-black text-white justify-between items-center flex w-[85%]">
//             <p className="text-[13px] leading-[26px] font-normal text-[#47779d]">
//               Privacy Policy / Terms of Use
//             </p>
//             <h1 className="text-[13px] leading-[26px] font-normal text-[#47779d]">
//               © 2020 Gnodesign.com. All Rights Reserved.
//             </h1>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[500px] lg:h-[400px] flex flex-col justify-between items-center bg-[#101010]">
      <div className="w-[80%] h-[85%] flex justify-center flex-col lg:flex-row lg:justify-start items-center gap-6 lg:gap-20 lg:mt-6 mt-10">
        <div className="flex flex-col gap-2  lg:gap-7 h-auto lg:h-[70%] w-[100%] lg:w-[40%]">
          <h3 className="text-[white] text-[15px] lg:text-[18px]  font-[600] ">
            About Cariera
          </h3>
          <p className="text-[#969496] text-[13px] lg:text-[16px] font-[400]">
            Cariera is a complete Job Board theme for WordPress theme and does
            not require extra plugins.
          </p>
        </div>
        <div className="flex flex-col  gap-2 lg:gap-5  h-auto lg:h-[70%] w-[100%] lg:w-[auto]">
          <h3 className="text-[white] text-[15px] lg:text-[18px]  font-[600]">
            Support Links
          </h3>
          <p className="mt-0 lg:mt-3 text-[#969496]">Live Demo</p>
          <p className="text-[#969496] text-[13px] lg:text-[16px] font-[400]">
            Theme Page
          </p>
          <p className="text-[#969496] text-[13px] lg:text-[16px] font-[400]">
            Support Site
          </p>
          <p className="text-[#969496] text-[13px] lg:text-[16px] font-[400]">
            Facebook Group
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-7 h-auto lg:h-[70%] ml-0 lg:ml-28 mb-6 lg:mb-0 w-[100%] lg:w-[20%]">
          <h3 className="text-[white] text-[15px] lg:text-[18px] font-[600]">
            Social Links
          </h3>
          <div className="flex gap-5 text-[white] items-center">
            <p>
              {" "}
              <BiLogoFacebookSquare color="#969496" size={20} />
            </p>
            <p>
              <LiaLinkedinIn color="#969496" size={20} />
            </p>
            <p>
              <FaInstagram color="#969496" size={20} />
            </p>
            <p>
              <IoBasketballOutline color="#969496" size={20} />
            </p>
            <p>
              <FaYoutube color="#969496" size={20} />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[15%]  flex  justify-center items-center bg-[#080808]">
        <div className="w-[95%] lg:w-[85%] h-[100%]  justify-center lg:justify-between items-center text-[#969496] flex flex-col lg:flex-row lg:gap-0 gap-1">
          <div className="flex gap-1 lg:text-[13px] text-[10px] font-[400]">
            <p className="lg:text-[13px] text-[10px] font-[400]">
              Privacy Policy
            </p>
            <p>/</p>
            <p>Terms of use</p>
          </div>
          <div>
            <p className="lg:text-[13px] text-[10px] font-[400]">
              © 2020 Gnodesign.com. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;