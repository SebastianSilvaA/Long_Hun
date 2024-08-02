import { FaArrowRight } from "react-icons/fa";


const Card = ({ imageSrc, content, content2, imgClass, link }) => {
    return (
        <div className="flex items-center">
        <div className="inline-block overflow-hidden transition duration-300 transform shadow-xl hover:shadow-2xl hover:scale-105">
            <img className={`w-auto h-80 object-cover ${imgClass}`} src={imageSrc} alt="" />
            <div className="flex items-center justify-between p-4 mt-2 bg-customBlack">
                <div>
                    <div className="text-xl text-orange-400">{content}</div>
                    <div className="mt-2 text-3xl font-bold text-white">{content2}</div>
                </div>
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 font-semibold text-white transition duration-500 rounded-lg shadow-md text-md bg-customGray hover:shadow-lg transform-gpu hover:scale-110">
                            <FaArrowRight />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
