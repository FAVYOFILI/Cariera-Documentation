import React from "react";
import ArticleCard from "./ArticleCard";
import { GrStatusGood } from "react-icons/gr";
import { LuFileText } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import { IoMapOutline } from "react-icons/io5";
import { TbBallFootball } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";

const Articles: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFAFA] flex justify-center items-center py-[60px] lg:py-[90px] border-b border-[rgb(224,224,224)]">
      <div className="w-[85%] flex flex-col">
        <h2 className="text-[24px] text-[#424242] text-center font-[500]">
          Cariera Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]  mt-[30px] lg:mt-[50px]">
          <div className="flex flex-col gap-[30px]">
            <ArticleCard
              icon={<GrStatusGood color="#1E73BE" size={23} />}
              title="Get Started"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="Theme Installation"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Theme Setup & Import"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="Manual/Automatic Updates"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Translations"
              icon5={<LuFileText size={18} color="rgb(202,202,202)" />}
              content5="Main Settings & Options"
              icon6={<LuFileText size={18} color="rgb(202,202,202)" />}
              content6="Theme Activation"
              className="h-[370px] lg:h-[350px]"
            />
            <ArticleCard
              icon={<TbBallFootball color="#1E73BE" size={23} />}
              title="Guides"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="User Dashboard Menus"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Change single listing layout"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="Update Core Plugins"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Change logo"
              icon5={<LuFileText size={18} color="rgb(202,202,202)" />}
              content5="Editing the User Extra Menu"
              icon6={<LuFileText size={18} color="rgb(202,202,202)" />}
              content6="Company Filtering by Active Jobs"
              content7="View All 7"
              icon7={<FaArrowRight size={20} />}
              className="h-[460px] lg:h-[400px]"
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <ArticleCard
              icon={<IoSettings color="#1E73BE" size={23} />}
              title="Cariera Core"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="User Login & Registration"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Core Emails"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="reCAPTCHA"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Promotional Packages"
              icon5={<LuFileText size={18} color="rgb(202,202,202)" />}
              content5="Notifications"
              icon6={<LuFileText size={18} color="rgb(202,202,202)" />}
              content6="Notification Webhooks"
              content7="View All 9"
              icon7={<FaArrowRight size={20} />}
              className="h-[400px]"
            />
            <ArticleCard
              icon={<TiSpanner color="#1E73BE" size={23} />}
              title="Troubleshoot"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="Using WPBakery after version 1.4.5?"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Before Updating to 1.4.8"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="Listing Search elements after 1.7.5"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="404 Page Not Found"
              className="h-[310px] lg:h-[270px]"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <ArticleCard
              icon={<IoBriefcaseOutline color="#1E73BE" size={23} />}
              title="WP Job Manager"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="WC Paid Listings"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Premium Compatible Plugins"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="Edit Submission Fields"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Extension Compatibility"
              className="h-[290px] lg:h-[270px]"
            />
            <ArticleCard
              icon={<IoMapOutline color="#1E73BE" size={23} />}
              title="Maps"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="Maps Providers"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Creating a Google API Key"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="Adding the Google API Key"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Mapbox API"
              icon5={<LuFileText size={18} color="rgb(202,202,202)" />}
              content5="Listings not shown in Map"
              className="h-[360px] lg:h-[310px]"
            />
            <ArticleCard
              icon={<TiLightbulb color="#1E73BE" size={23} />}
              title="Other"
              icon1={<LuFileText size={18} color="rgb(202,202,202)" />}
              content1="Required licenses key for plugins?"
              icon2={<LuFileText size={18} color="rgb(202,202,202)" />}
              content2="Theme customizations"
              icon3={<LuFileText size={18} color="rgb(202,202,202)" />}
              content3="How to change the Sender Name in Outgoing WordPress Emails"
              icon4={<LuFileText size={18} color="rgb(202,202,202)" />}
              content4="Google Job Search Integration"
              className="h-[370px] lg:h-[290px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
