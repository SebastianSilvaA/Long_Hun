import { FaArrowRight } from "react-icons/fa";

const Card = ({imageSrc, content, content2, imgClass}) => {
    return (
        <>
       
       <div class="min-h-screen  flex items-center">
  <div class="container mx-auto p-9 max-w-sm overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
    <img class={imgClass} src={imageSrc} alt="" />
    <div class="flex justify-between items-center bg-customBlack mt-2 ">
      <div>
        <div class="ml-3 mt-5 text-1xl text-orange-400 ">{content}</div>
        <div class="ml-2 mt-2 mb-2  text-3xl text-white font-bold ">{content2}</div>
      </div>
      <div className="mr-3">
        <button class="text-white text-md font-semibold bg-customGray py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
          <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
</div>


    
        </>
    );
}

export default Card;