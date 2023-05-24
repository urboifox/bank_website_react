import style from "../style";
import { card } from "../assets";
import { Button } from "./index";

const CardDeal = () => {
  return (
    <section
      id="product"
      className={`relative ${style.boxWidth} ${style.paddingX} ${style.paddingY}`}
    >
      <div className="z-30 flex flex-col text-center items-center md:flex-row justify-between md:text-left">
        <div className="max-md:mb-20  md:w-[50%]">
          <h2 className={`${style.heading2} mb-2`}>
            Find a better card deal in few easy steps.
          </h2>
          <p className={`${style.paragraph} mb-10`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button />
        </div>
        <div className="max-w-[70%] md:max-w-[40%]">
          <img src={card} alt="card deal" />
        </div>
      </div>
      <div className="z-10 blue__gradient absolute w-[500px] h-full opacity-[15%] left-[-300px] bottom-[-600px]"></div>
      <div className="z-10 white__gradient absolute w-[500px] h-full opacity-[5%] left-[-300px] bottom-[-400px]"></div>
    </section>
  );
};

export default CardDeal;
