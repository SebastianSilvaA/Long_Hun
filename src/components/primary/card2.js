import { FaArrowRight } from "react-icons/fa";

const Card2 = ({ imageSrc, content, content2, imgClassName, link }) => {
    return (
        <div className="flex items-center">
            <div className="container overflow-hidden transition duration-300 transform shadow-xl max-w shadow-x hover:shadow-2xl hover:scale-105">
                <div className="overflow-hidden">
                    <img className={`w-80 h-auto md:w-auto md:h-auto ${imgClassName}`} src={imageSrc} alt="" />
                </div>
                <div className="flex flex-col items-start justify-between p-4 mt-2 md:items-center md:flex-row bg-customBlack">
                    <div>
                        <div className="mt-5 ml-3 text-xl text-orange-400">{content}</div>
                        <div className="mt-2 mb-2 ml-2 text-2xl font-bold text-white">{content2}</div>
                    </div>
                    <div className="mr-3">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 font-semibold text-white transition duration-500 transform rounded-lg shadow-md text-md bg-customGray hover:shadow-lg hover:scale-110">
                                <FaArrowRight />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card2;