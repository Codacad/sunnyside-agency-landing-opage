import DownArrow from '../images/icon-arrow-down.svg'
import Hamburger from '../images/icon-hamburger.svg'
const Header = ({handleSidenavShow}) => {
  return (
    <>
      <div className="header p-6 bg-heroDesktopImage w-[100%] h-[70vh] bg-center bg-cover bg-no-repeat">
        <nav className="flex justify-between items-center">
          <a href="#" className='text-2xl font-bold text-white'>sunnyside</a>
          <ul className='flex gap-4 text-white text-[14px] max-sm:hidden'>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#" className="bg-white text-[10px] font-bold shadow-md uppercase font-barlow rounded-full text-gray-900 hover:text-white hover:bg-[#ffffff3c] active:bg-[#ffffff32] px-4 py-3 tracking-[.05rem]">Contact</a></li>
          </ul>
          <a href="#" className="hamburger sm:hidden max-sm:block">
            <img src={Hamburger} onClick={handleSidenavShow} alt="Hamburger Icon" />
          </a>
        </nav>
        <div className="hero-text flex flex-col items-center text-center mt-20 max-sm:mt-12">
            <h1 className='uppercase text-white text-[36px] font-barlow font-[900] tracking-[.5rem]'>We are creatives</h1>
            <img className='mt-12 h-16 max-sm:mt-4' src={DownArrow} alt="Arrow Down" />
        </div>
      </div>
    </>
  )
}

export default Header
