import Ques from "./Ques"

const Addques =()=>{
    return (
      <>
        <div className="flex flex-col items-center justify-center gap-8 h-150 bg-[#fafafa]">
          <p className="leading-[26px] text-[24px] font-medium  text-[#424242] mt-10 ">
            Frequently Asked Questions
          </p>

          <Ques text="Customizations" />
          <Ques text="The theme is missing the style.css sheet." />
          <Ques text="How many websites can i use the theme on?" />
          <Ques text="Changelog" />
        </div>
      </>
    );
}
export default Addques