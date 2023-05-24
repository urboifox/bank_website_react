import style from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { nanoid } from "nanoid";

const Footer = () => {
  const footerLinksElements = footerLinks.map((e) => {
    return (
      <div key={nanoid()}>
        <h4 className="text-[18px] font-medium text-white mb-3">{e.title}</h4>
        {e.links.map((e) => {
          return (
            <div key={nanoid()}>
              <a
                href={e.link}
                className="transition-all hover:text-white text-[16px] text-dimWhite"
              >
                {e.name}
              </a>
            </div>
          );
        })}
      </div>
    );
  });

  const socialLinks = socialMedia.map((e) => {
    return (
      <div key={e.id}>
        <a href={e.link}>
          <img src={e.icon} alt="social media icon" />
        </a>
      </div>
    );
  });

  return (
    <footer className={`bg-black`}>
      <div
        className={`${style.boxWidth} ${style.paddingX} ${style.paddingY} mx-auto`}
      >
        <div className={`pb-8 border-b-dimWhite border-b-[1px]`}>
          <div className="flex max-sm:flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="max-w-[250px] cursor-pointer">
                <img src={logo} alt="logo" />
              </div>
              <p className="text-dimWhite text-[18px] max-w-[85%]">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            <div className="gridme-sm w-full">{footerLinksElements}</div>
          </div>
        </div>
        <div className="pt-8 flex items-center justify-between  max-sm:flex-col max-sm:gap-4">
          <div>
            <p className={`${style.paragraph} max-sm:text-[14px]`}>
              Copyright &copy; 2023 Gunblade. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-5">{socialLinks}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
