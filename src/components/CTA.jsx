/* eslint-disable react-refresh/only-export-components */
import style from "../style";
import { Button } from ".";

const CTA = () => {
  return (
    <section
      id="cta"
      className={`${style.boxWidth} ${style.paddingX} ${style.paddingY}`}
    >
      <article className="p-10 md:p-20 bg-black-gradient-2 rounded-[20px] flex flex-col items-center max-md:text-center md:flex-row justify-between">
        <div className="max-md:mb-10 md:max-w-[60%]">
          <h2 className={`${style.heading2} mb-5`}>
            Let’s try our service now!
          </h2>
          <p className={`${style.paragraph} sm:max-w-[70%]  max-md:mx-auto`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </article>
    </section>
  );
};

export default CTA;
