import DemoPic from "../../../assets/images/Demo.svg";

const ContactPart = () => {
  return (
    <div className="flex flex-row max-lg:flex-col max-sm:flex-col gap-16 text-white">
      <div className="max-lg:my-5  max-sm:mt-10 max-sm:mr-[30px] max-sm:m-auto ml-[120px] mt-[100px] ">
        <img
          className="max-lg:w-[600px] max-lg:h-[27rem]  max-sm:ml-16 max-sm:w-full  max-sm:h-[18rem] h-[38rem] w-[53rem]"
          src={DemoPic}
          alt=""
        />
      </div>
      <div className="max-lg:mt-[-3rem] max-lg:w-[40rem] max-lg:ml-16 max-sm:mt-[0rem] max-sm:w-[30rem]  max-sm:text-center max-sm:m-auto max-sm:space-y-3  mt-[150px] ml-10 space-y-6 w-[30rem] ">
        <h1 className=" font-poppins font-[700]  leading-[58px] text-4xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="max-lg:w-[560px] max-sm:w-[330px]   max-sm:m-auto w-[490px] text-[18px] font-[500] text-[#c3b7e0] font-open">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Ceate connections with your user as you engage
          in genuine discussion .{" "}
        </p>
        <button className="max-sm:mt-12 w-[12rem] text-[#674BAF] font-poppins font-[400] bg-white h-14 rounded-full shadow-zinc-600 shadow-2xl">
          Register
        </button>
      </div>
    </div>
  );
};

export default ContactPart;
