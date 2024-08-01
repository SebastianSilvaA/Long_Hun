import { FaArrowRight } from "react-icons/fa";

const Card2 = ({ imageSrc, content, content2, imgClassName }) => {
    
  return (
    <>
    <div class="flex items-center">
      <div className="container overflow-hidden transition duration-300 transform shadow-xl max-w shadow-x hover:shadow-2xl hover:scale-105">
        <div className="overflow-hidden">
          <img className={`w-auto h-auto ${imgClassName}`} src={imageSrc} alt="" />
        </div>
        <div className="flex items-center justify-between p-4 mt-2 bg-customBlack">
          <div>
            <div className="mt-5 ml-3 text-xl text-orange-400">{content}</div>
            <div className="mt-2 mb-2 ml-2 text-3xl font-bold text-white">{content2}</div>
          </div>
          <div className="mr-3">
            <button className="px-4 py-2 font-semibold text-white transition duration-500 transform rounded-lg shadow-md text-md bg-customGray hover:shadow-lg hover:scale-110">
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
