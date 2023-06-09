import style from "../style";
import { FeedbackCard, Clients } from ".";
import { feedback } from "../constants";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Testimonials = () => {
  const feedbackCards = feedback.map((e) => {
    return (
      <div key={e.id} className={`flex-1 `}>
        <FeedbackCard
          title={e.title}
          content={e.content}
          profile={e.img}
          name={e.name}
        />
      </div>
    );
  });

  return (
    <section
      id="testimonials"
      className={`${style.boxWidth} ${style.paddingX} ${style.paddingY}`}
    >
      <div>
        <div className="flex justify-between items-center  flex-col max-md:text-center md:flex-row">
          <h2 className={`${style.heading2} max-md:mb-5`}>
            What people are
            <br />
            saying about us
          </h2>
          <p className={`${style.paragraph} max-w-[30rem]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="mt-16 gridme ">{feedbackCards}</div>
      </div>
      <Clients
        client1={airbnb}
        client2={binance}
        client3={coinbase}
        client4={dropbox}
      />
    </section>
  );
};

export default Testimonials;
