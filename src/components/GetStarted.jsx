import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div className="transition-all cursor-pointer w-[140px] h-[140px] relative bg-blue-gradient rounded-full p-[2px]">
      <div className="flex items-center justify-center flex-col w-full h-full bg-primary rounded-full">
        <h2 className="flex text-gradient items-center font-semibold text-[18px]">
          <span className="mr-2">Get</span>
          <img src={arrowUp} className="w-[23px] h-[23px]" alt="arrow up" />
        </h2>
        <h2 className="text-gradient font-semibold text-[18px]">Started</h2>
      </div>
    </div>
  );
};

export default GetStarted;
