import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import style from "../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`py-10 flex items-end justify-between flex-col md:flex-row w-[100%]`}
    >
      <div
        className={`${style.paddingX} flex self-start md:self-center flex-col`}
      >
        <div className="uppercase w-fit mb-2 flex items-center rounded-[10px] justify-start p-2 pr-4 bg-discount-gradient">
          <img src={discount} className="w-[32px] h-[32px]" alt="discount" />
          <p className="flex gap-[5px] text-dimWhite md:text-[18px] max-sm:text-[13px]">
            <span className="text-white">20% </span>
            discount for
            <span className="text-white"> 1 month </span> account
          </p>
        </div>

        <div className="flex items-center relative">
          <h1 className="font-semibold text-[72px] z-[1] max-sm:text-[60px] leading-[100px]">
            The Next
            <br />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="max-ss:hidden ml-10">
            <GetStarted />
          </div>
          <div className="blue__gradient opacity-[50%] w-[30%] h-[500px] absolute -left-[50%] md:-left-[50%] top-[0px]"></div>
        </div>
        <h1 className="font-semibold text-[72px] max-sm:text-[60px] leading-[100px]">
          Payment Method
        </h1>
        <p className="mt-6 text-[18px] text-dimWhite max-w-[500px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="relative my-20 md:my-0 max-w-[670px] z-50">
        <img className="object-contain w-full h-full" src={robot} alt="robot" />
        <div className="opacity-[45%] absolute pink__gradient w-[50%] h-[50%] top-[15%] left-32 -z-10"></div>
        <div className="opacity-[80%] absolute blue__gradient w-[70%] h-[70%] top-[20%] right-0 -z-20"></div>
        <div className="opacity-[30%] absolute white__gradient w-[30%] h-[70%] top-[0%] left-[42%] -z-[30]"></div>
      </div>
      <div className="ss:hidden self-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
