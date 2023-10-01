const Graphics = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:h-[50vh] md:h-[80vh] max-sm:min-h-[100vh]">
        <div className="graphic-design bg-graphicDesignImage bg-cover bg-no-repeat bg-center flex justify-center items-end text-center text-sm p-8 max-sm:h-[50vh]">
          <div className="w-[300px]">
            <h1 className="text-2xl font-bold text-[#25564b] mb-4">
              Graphic Design
            </h1>
            <p className="text-[#25564b] font-[400] font-barlow">
              Great design makes you memorable. We deliver artwork that
              underscore your brand message and capture potential clients&lsquo;
              attention
            </p>
          </div>
        </div>
        <div className="photography bg-photographyImage bg-cover bg-no-repeat bg-center flex justify-center items-end text-center text-sm p-8 max-sm:h-[50vh]">
          <div className="w-[300px]">
            <h1 className="text-2xl font-bold text-[#19536b] mb-4">
              Photography
            </h1>
            <p className="text-[#19536b] font-[400] font-barlow">
              Increase your capability by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphics;
