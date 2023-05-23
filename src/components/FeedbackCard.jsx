/* eslint-disable react/prop-types */
import { quotes } from "../assets";
import style from "../style";

const FeedbackCard = ({ content, profile, name, title }) => {
  return (
    <article
      className={`feedback-card rounded-[20px]  flex flex-col px-6 py-12`}
    >
      <div className="mb-8">
        <img src={quotes} alt="quotes" />
      </div>
      <div>
        <p
          className={`${style.paragraph} text-white min-h-[100px] flex items-center justify-center mb-4`}
        >
          {content}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[50px]">
          <img src={profile} alt="profile picture" />
        </div>
        <div className=" flex flex-col cursor-pointer">
          <p className={`${style.paragraph} text-white`}>{name}</p>
          <span className="text-[16px] text-dimWhite">{title}</span>
        </div>
      </div>
    </article>
  );
};

export default FeedbackCard;
