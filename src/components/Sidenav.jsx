const Sidenav = ({ sidenavShow, setSidenavShow }) => {
  let sidenavStyle;
  sidenavShow
    ? (sidenavStyle =
        "sidenav transition-all duration-500 fixed top-0 right-0 w-80 h-full p-6 min-h-[100vh] overflo-auto bg-red-100 shadow-2xl sm:hidden")
    : "sidenav fixed top-0 right-[-20rem] w-80 h-full p-4 min-h-[100vh] overflo-auto bg-red-100 shadow-2xl sm:hidden";

    const handleSidenavHide = () => {
      sidenavShow ? setSidenavShow(false) : setSidenavShow(true)
    }
  return (
    <>
      <div className={sidenavStyle}>
        <div className="header flex items-center justify-between">
          <a href="" className="text-2xl font-barlow font-bold">
            <h1>sunnyside</h1>
          </a>
          <div onClick={handleSidenavHide} className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-red-300 hover:fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
        <ul className="mt-4 flex flex-col">
          <li>
            <a href="" className="p-2 block hover:bg-red-200">
              About{" "}
            </a>
          </li>
          <li>
            <a href="" className="p-2 block hover:bg-red-200">
              Services
            </a>
          </li>
          <li>
            <a href="" className="p-2 block hover:bg-red-200">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
