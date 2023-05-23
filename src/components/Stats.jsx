import { stats } from "../constants";
import style from "../style";
const Stats = () => {
  const statItems = stats.map((e) => {
    return (
      <li
        key={e.id}
        className=" w-full md:w-fit break-normal  relative flex items-center mb-10"
      >
        <span className="text-[40px] ss:text-[50px] mr-5 font-semibold text-white">
          {e.value}
        </span>
        <p className=" text-gradient md:w-max ss:text-[30px] text-[20px]">
          {e.title}
        </p>
        <div
          className={`absolute  w-[20%] bottom-[-30%] translate-x-[-50%] h-[2px] ${
            e.id === stats[stats.length - 1].id ? "" : `bg-dimWhite`
          } left-[50%] md:w-[2px] md:h-[50%] md:left-[100%] md:translate-x-[50px] md:top-[50%] md:translate-y-[-50%]`}
        ></div>
      </li>
    );
  });

  return (
    <div className={`${style.boxWidth} ${style.paddingY} ${style.paddingX}`}>
      <ul
        className={`w-fit md:w-full mx-auto md:flex-row md:gap-[100px]  flex flex-col items-start text-start justify-center`}
      >
        {statItems}
      </ul>
    </div>
  );
};

export default Stats;
