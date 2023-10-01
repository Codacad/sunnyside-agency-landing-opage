const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col items-center p-[10%] max-sm:py-[15%] max-sm:px-[5%]">
        <h1 className="text-[#a7abae] max-sm:text-2xl font-[1000] mb-8 uppercase tracking-[.3rem] font-fraunces">
          Client Testimonials
        </h1>
        <div className="clients grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-4">
          <div className="client flex flex-col items-center text-center gap-8">
            <div className="profile-pic w-16 h-16 rounded-full bg-emily bg-cover bg-center"></div>
            <p className="px-8 text-[#23303e]">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="name">
              <h1 className="1text-black text-xl font-bold">Emily R.</h1>
              <span className="designation text-[#818498]">
                Marketing Director
              </span>
            </div>
          </div>
          <div className="client mt-8 flex flex-col items-center text-center gap-8">
            <div className="profile-pic w-16 h-16 rounded-full bg-thomas bg-cover bg-center"></div>
            <p className="px-8 text-[#23303e]">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="name">
              <h1 className="text-black text-xl font-bold">Thomas S.</h1>
              <span className="designation text-[#818498]">
                Chief Operating Officer
              </span>
            </div>
          </div>
          <div className="client mt-8 flex flex-col items-center text-center gap-8">
            <div className="profile-pic w-16 h-16 rounded-full bg-jenny bg-cover bg-center"></div>
            <p className="px-8 text-[#23303e]">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="name">
              <h1 className="text-black text-xl font-bold">Jennie F.</h1>
              <span className="designation text-[#818498]">
                Business Owner
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
