import Gnologo from "./assets/GNOlogo.png"
GIT ADD .

const Header = () => {





    return (
      <header className="bg-white px-20 py-6 flex justify-between items-center">
        <div>
          <img src={Gnologo} className=" h-[40px]" />
        </div>

         <div className="h-[40px] w-[40px] lg:hidden bg-[#47c494] flex justify-center items-center cursor-pointer rounded-[5px]">
       </div>

        <div className=" lg:flex gap-6 justify-center items-center mr-8 hidden">
          <nav className="flex items-center"> 
            <ul className="flex gap-6 text-black text-[14px]">
              <li className="text-[#8e709c] ">HOME</li>

             
               
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
}

export default Header