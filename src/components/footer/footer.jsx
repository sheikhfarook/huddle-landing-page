import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
const FooterIcon = () => {
  const AppLogo = [
    {
      id: 1,
      facebookIcon: facebook,
    },
    {
      id: 2,
      twitterIcon: twitter,
    },
    {
      id: 3,
      instagramIcon: instagram,
    },
  ];
  return (
    <div className="flex gap-5 mt-10 max-lg:mt-[-0rem] max-sm:ml-[7rem] max-sm:justify-center max-sm:m-auto max-sm:mt-16  justify-end mr-[5rem]">
      {AppLogo?.map((icon, index) => (
        <div
          key={AppLogo?.id}
          className={`${
            index === 0
              ? "border-2 rounded-full p-2 w-9 h-9"
              : index === 1
              ? "border-2 rounded-full p-2 w-9 h-9"
              : index === 2
              ? "border-2 rounded-full p-2 w-9 h-9"
              : 0
          }`}>
          <div>
            <img className="m-auto" src={icon?.facebookIcon} alt="" />
          </div>
          <div>
            <img className="m-auto" src={icon?.twitterIcon} alt="" />
          </div>
          <div>
            <img className="m-auto" src={icon?.instagramIcon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterIcon;
