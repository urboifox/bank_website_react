import style from "../style";
import { Button } from "./index";
import { features } from "../constants";

const Business = () => {
  const featureCards = features.map((e) => {
    return (
      <div
        key={e.id}
        className="rounded-[20px] px-5 py-7 flex flex-col text-center gap-4 items-center cursor-default feature-card lg:flex-row lg:text-start lg:gap-5"
      >
        <div className="w-[64px] h-[64px] aspect-square relative flex items-center justify-center rounded-full">
          <img src={e.icon} alt="icon" className="z-10 object-contain" />
          <div className="bg-[#09977C] absolute w-full h-full top-0 left-0 opacity-[10%] rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-[18px] text-white">
            {e.title}
          </h3>
          <p className="text-[16px] text-dimWhite">{e.content}</p>
        </div>
      </div>
    );
  });

  return (
    <section
      id="features"
      className={`${style.boxWidth} ${style.paddingY} ${style.paddingX}`}
    >
      <div className="flex flex-col w-full lg:flex-row lg:justify-between">
        <div className="text-center mb-20 lg:text-start lg:w-[50%]">
          <h2 className="mb-5 text-[48px] font-semibold text-white">
            You do the business,
            <br /> we’ll handle the money.
          </h2>
          <p className="text-[18px] mb-10 text-dimwhite">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button />
        </div>
        <div className="flex flex-col itemsc-center lg:w-[40%]">
          {featureCards}
        </div>
      </div>
    </section>
  );
};

export default Business;
