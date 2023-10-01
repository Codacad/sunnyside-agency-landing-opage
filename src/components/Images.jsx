import con from "../images/desktop/image-gallery-cone.jpg";
import milkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarCubs from "../images/desktop/image-gallery-sugarcubes.jpg";
const Images = () => {
  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-2">
        <img className="h-76" src={milkBottles} alt="Milk Bottles" />
        <img className="h-76" src={orange} alt="Orange" />
        <img className="h-76" src={con} alt="Con" />
        <img className="h-76" src={sugarCubs} alt="Sugar Cubs" />
      </div>
    </>
  );
};

export default Images;
