import StandoutImage from "../images/desktop/image-stand-out.jpg";
const Standout = () => {
  return (
    <>
      <div className="tranform grid grid-cols-2 max-sm:grid-cols-1 w-[100%] max-md:h-[50vh] max-sm:h-[100vh] h-[75vh]">
        <div className="transform-brand w-[100%]">
          <img
            src={StandoutImage}
            className="w-[100%] max-md:h-[50vh] h-[75vh]"
            alt=""
          />
        </div>
        <div className="transform-brand p-[20%] max-md:p-[10%] flex flex-col justify-center text-center items-center max-sm:h-[50vh]">
          <h1 className="text-black font-fraunces font-semibold text-[38px]">
            Standout to the right audience
          </h1>
          <p className="text-sm py-4 font-barlow font-[400] text-[#818498]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we&lsquo;ll build and
            extend your brand in digital places
          </p>
          <a
            href="#"
            className="relative flex flex-col items-center w-[125px] uppercase font-bold font-fraunces before:absolute before:bottom-0 before:bg-red-300 before:rounded-full before:-z-10 z-10 before:w-[100%] before:h-[10px] before:left-0 hover:before:bg-red-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default Standout;
