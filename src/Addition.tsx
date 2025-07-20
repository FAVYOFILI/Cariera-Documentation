import React from "react";
import ArticleCard from "./ArticleCard";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuFileText } from "react-icons/lu";

const Addition: React.FC = () => {
  return (
    <>
      <div className="w-full bg-[white] flex justify-center items-center py-[60px] lg:py-[90px] border-b border-[rgb(224,224,224)]">
        <div className="w-[85%] flex flex-col">
          <h2 className="text-[24px] text-[#424242] text-center font-[500]">
            Additional Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[30px] lg:mt-[50px]">
            <div className="flex flex-col gap-[30px] h-auto">
              <ArticleCard
                icon={<IoBriefcaseOutline color="#1E73BE" size={23} />}
                title="Cariera Events"
                icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
                content1="Plugin Intro"
                icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
                content2="Getting Started"
                icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
                content3="Main Settings"
                className="h-[200px]"
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <ArticleCard
                icon={<IoBriefcaseOutline color="#1E73BE" size={23} />}
                title="Essentials for WPJM"
                icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
                content1="LinkedIn Applications"
                icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
                content2="Invite Candidate to Apply"
                icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
                content3="Twitter Applications"
                icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
                content4="Plugin Activation"
                className="h-[270px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addition;
