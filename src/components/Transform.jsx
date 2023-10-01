import EggImage from "../images/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <>
      <div className="tranform grid grid-cols-2 max-sm:grid-cols-1 w-[100%] max-md:h-[50vh] max-sm:min-h-[100vh] h-[75vh]">
        <div className="transform-brand p-[20%] max-md:p-[10%] flex flex-col justify-center items-center text-center  max-sm:h-[50vh]">
          <h1 className="text-black w-72 font-fraunces font-semibold text-[38px]">
            Transform your brand
          </h1>
          <p className="text-sm py-4 font-barlow font-[400] text-[#818498]">
            We are full-service agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the
            marketing for you.
          </p>
          <a
            href="#"
            className="relative flex flex-col items-center w-[125px] uppercase font-bold font-fraunces before:absolute before:bottom-0 before:bg-yellow-100 before:rounded-full before:-z-10 z-10 before:w-[100%] before:h-[10px] hover:before:bg-yellow-300 before:left-0"
          >
            Learn More
          </a>
        </div>
        <div className="transform-brand max-sm:order-first w-[100%] max-md:h-[50vh] h-[75vh]">
          <img src={EggImage} className="w-[100%] h-[100%]" alt="" />
        </div>
      </div>
    </>
  );
};

export default Transform;
