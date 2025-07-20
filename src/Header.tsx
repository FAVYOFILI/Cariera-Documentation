// import Gnologo from "./assets/GNOlogo.png"

// const Header = () => {





//     return (
//       <header className="bg-white px-20 py-6 flex justify-between items-center">
//         <div>
//           <img src={Gnologo} className=" h-[40px]" />
//         </div>

//          <div className="h-[40px] w-[40px] lg:hidden bg-[#47c494] flex justify-center items-center cursor-pointer rounded-[5px]">
//        </div>

//         <div className=" lg:flex gap-6 justify-center items-center mr-8 hidden">
//           <nav className="flex items-center"> 
//             <ul className="flex gap-6 text-black text-[14px]">
//               <li className="text-[#8e709c] ">HOME</li>

             
               
//               <li className="text-[rgb(94, 94, 94)]">DEMO</li>
//               <li>SUPPORT</li>
//               <li>THEMES</li>
//               <li>FB GROUP</li>
//                 </ul>
                
              
//           </nav>

//           <button className="px-[28px] py-[10px] flex rounded-md justify-center items-center text-white bg-[#24a3a4]">
//             Buy Cariera
//           </button>
//         </div>


//       </header>
//     );
// }

// export default Header


import { useState } from "react";
import Gnologo from "./assets/GNOlogo.png";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="bg-white px-20 py-6 flex justify-between items-center">
      <div>
        <img src={Gnologo} className="h-[40px]" alt="GNO Logo" />
      </div>

     
      <div
        className="h-[40px] w-[40px] lg:hidden bg-[#47c494] flex justify-center items-center cursor-pointer rounded-[5px] relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
       
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>

      
        {isHovering && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white"
            >
              HOME
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white"
            >
              DEMO
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white"
            >
              SUPPORT
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white"
            >
              THEMES
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white"
            >
              FB GROUP
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white bg-[#24a3a4] rounded mx-2 my-1 text-center"
            >
              Buy Cariera
            </a>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex gap-6 justify-center items-center mr-8 hidden">
        <nav className="flex items-center">
          <ul className="flex gap-6 text-black text-[14px]">
            <li className="text-[#8e709c]">HOME</li>
            <li className="text-[rgb(94, 94, 94)]">DEMO</li>
            <li>SUPPORT</li>
            <li>THEMES</li>
            <li>FB GROUP</li>
          </ul>
        </nav>

        <button className="px-[28px] py-[10px] flex rounded-md justify-center items-center text-white bg-[#24a3a4]">
          Buy Cariera
        </button>
      </div>
    </header>
  );
};

export default Header;