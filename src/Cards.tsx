const Cards = () => {
  return (
    <main className="h-[1250px] w-[100%] bg-black justify-between items-center flex flex-col ">
      <div
        className="h-[144px] bg-purple-700 w-[200px] flex justify-center items-center text-[24px] font-medium text-[
rgb(66, 66, 66)] leading-[26px]"
      >
        Cariera Articles
      </div>
      <div className="w-[85%] bg-red-800 justify-between flex h-[1250px] flex-wrap ">
        {/* {Card 1} */}
        <div className="h-[364px] w-[362px] bg-amber-600 justify-center items-center rounded-md ">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[300px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 2} */}
        <div className="h-[390px] w-[362px] bg-amber-600 justify-center items-center rounded-md">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[300px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 3} */}
        <div className="h-[267px] w-[362px] bg-amber-600 justify-center items-center rounded-md">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[200px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 4} */}
        <div className="h-[391px] w-[362px] bg-amber-600 justify-center items-center rounded-md ">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[300px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 5} */}
        <div className="h-[289px] w-[362px] bg-amber-600 justify-center items-center rounded-md">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[300px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 6} */}
        <div className="h-[306px] w-[362px] bg-amber-600 justify-center items-center rounded-md">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[200px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>

        {/* {Card 6} */}
        <div className="h-[293px] w-[362px] bg-amber-600 justify-center items-center rounded-md">
          <div className="h-[53px] w-[320px] bg-blue-700 justify-center items-center flex rounded-md"></div>
          <div className="h-[200px] w-[300px] bg-pink-950 rounded-md"></div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
