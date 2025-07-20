// import { FaRegPlusSquare } from "react-icons/fa";
// <FaRegPlusSquare />;

// const FAQ: React.FC = () => {
//     return <main className="h-[588px] w-[100%] bg-[#fafafa] justify-between items-center">
//         <div className="">

//         </div>
//     </main>
// }

// export default FAQ

import { FaRegPlusSquare } from "react-icons/fa";
type Quesprops = {
  text: string;
};

const FAQ = ({ text }: Quesprops) => {
  return (
    <>
      <div className="bg-[#fafafa]">
        <div className=" items-center gap-5 h-[63px] flex bg-white border-1 border-gray-200 shadow-2xl sm:w-290 w-95 ">
          <FaRegPlusSquare className="text-[#24a3a4] text-2xl ml-3" />
          <p className="text-black  hover:text-[#24a3a4] cursor-pointer text-[20px] leading-[24px] font-bold ">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
export default FAQ;