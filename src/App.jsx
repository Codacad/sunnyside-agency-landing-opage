import "./App.css";
import Footer from "./components/Footer";
import Graphics from "./components/Graphics";
import Header from "./components/Header";
import Images from "./components/Images";
// import Sidenav from "./components/Sidenav";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import { useState } from "react";

function App() {
  const [sidenavShow, setSidenavShow] = useState(false)
  const handleSidenavShow = () => {
    setSidenavShow(true)
  }
  return (
    <div className="relative">
      <Header handleSidenavShow={handleSidenavShow} sidenaveShow={sidenavShow}/>
      <Transform />
      <Standout />
      <Graphics />
      <Testimonials />
      <Images />
      <Footer />
      {/* <Sidenav sidenavShow={sidenavShow} setSidenavShow={setSidenavShow}/> */}
    </div>
  );
}

export default App;
