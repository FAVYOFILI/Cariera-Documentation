import React from "react";

type cardProps = {
  icon?: React.ReactNode;
  title: string;
  icon1?: React.ReactNode;
  content1?: string;
  icon2?: React.ReactNode;
  content2?: string;
  icon3?: React.ReactNode;
  content3?: string;
  icon4?: React.ReactNode;
  content4?: string;
  icon5?: React.ReactNode;
  content5?: string;
  icon6?: React.ReactNode;
  content6?: string;
  content7?: string;
  icon7?: React.ReactNode;
  className?: string;
};

const ArticleCard: React.FC<cardProps> = ({
  icon,
  title,
  icon1,
  content1,
  icon2,
  content2,
  icon3,
  content3,
  icon4,
  content4,
  icon5,
  content5,
  icon6,
  content6,
  icon7,
  content7,
  className,
}) => {
  return (
    <div
      className={`bg-[white] rounded-[10px] flex flex-col px-[20px] pt-[20px] pb-[10px] border border-gray-300 h-[230px] ${className}`}
    >
      <div className="w-full rounded bg-[#E9EAF3] pl-[10px] py-[12px] flex gap-2 items-center min-h-[50px]">
        {icon}
        <h3 className="text-[15px] md:text-[18px] font-bold hover:text-[#24A3A4] cursor-pointer">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-4 mt-6 h-[auto]">
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span>{icon1}</span> {content1}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span>{icon2} </span> {content2}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span>{icon3} </span>
          {content3}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span>{icon4} </span>
          {content4}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span> {icon5} </span>
          {content5}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[rgb(94,94,94)] hover:text-[#24A3A4] cursor-pointer">
          <span> {icon6} </span>
          {content6}
        </p>
        <p className="flex items-center gap-3 text-[16px] text-[#24A3A4] hover:text-[rgb(94,94,94)] cursor-pointer">
          {content7} <span>{icon7} </span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
