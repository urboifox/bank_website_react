import style from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      className={` relative flex flex-col-reverse ${style.paddingY} ${style.paddingX} ${style.boxWidth} md:flex-row items-center justify-between`}
    >
      <div className="z-20 md:max-w-[40%] max-w-[70%]">
        <img src={bill} alt="billing" />
      </div>
      <div className="md:max-w-[40%] text-center mb-20 md:text-left">
        <h2 className={`${style.heading2}`}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${style.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-center gap-4 mt-10 w-fit max-md:mx-auto">
          <div className="cursor-pointer">
            <img src={apple} alt="apple" />
          </div>
          <div className="cursor-pointer">
            <img src={google} alt="google" />
          </div>
        </div>
      </div>
      <div className="z-10 pink__gradient absolute w-[500px] h-full opacity-[10%] left-[-300px] bottom-[-100px]"></div>
      <div className="blue__gradient absolute w-[500px] h-full opacity-[20%] left-[-300px] top-[-200px] "></div>
      <div className="blue__gradient absolute w-[500px] h-full opacity-[50%] right-[-300px] bottom-[-500px] "></div>
    </section>
  );
};

export default Billing;
