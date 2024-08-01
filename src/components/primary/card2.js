import { FaArrowRight } from "react-icons/fa";

const Card2 = ({ imageSrc, content, content2, imgClassName }) => {
    
  return (
    <>
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto p-9 max-w-sm overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <div className="overflow-hidden">
          <img className={`w-auto h-auto ${imgClassName}`} src={imageSrc} alt="" />
        </div>
        <div className="flex justify-between items-center bg-customBlack mt-2 p-4">
          <div>
            <div className="ml-3 mt-5 text-xl text-orange-400">{content}</div>
            <div className="ml-2 mt-2 mb-2 text-3xl text-white font-bold">{content2}</div>
          </div>
          <div className="mr-3">
            <button className="text-white text-md font-semibold bg-customGray py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:scale-110">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
}

export default Card2;
