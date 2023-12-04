import MsgIcon from "../../assets/images/logo.svg";

const HeaderIcon = () => {
  return (
    <div>
      <img
        className=" max-lg:m-8 max-lg:ml-16 max-sm:w-[11rem] max-sm:m-8 mt-20 ml-32 w-[12rem] "
        src={MsgIcon}
        alt=""
      />
      <div></div>
    </div>
  );
};

export default HeaderIcon;
