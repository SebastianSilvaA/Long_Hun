import Card2 from "@/components/primary/card2";
import "./styles.css"
import Card from "@/components/primary/card"
import { FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
    return (
      <>
        <div className="flex flex-col items-center gap-8 mb-10 md:mb-0 md:gap-0">      
         <div className="mt-36">
        <div className="flex items-center justify-center pb-3 text-lg font-bold text-orange-400 md:text-3xl ">REDES SOCIALES</div>
        <div className="flex items-center justify-center text-2xl font-bold text-white md:text-4xl ">LONG HUN</div>
        </div>
       <ul className="flex flex-col items-center gap-4 md:p-20 md:grid md:grid-cols-6 lg:lg-custom-grid-rows">
            <li className="col-span-2 row-span-1">
                <Card imageSrc ="/assets/contactosImg/facebook.jpg" content="FACEBOOK" content2="JOSE KRAITZ"/>
            </li>
            <li className="md:col-span-2 md:row-span-1">
                <Card  imageSrc ="/assets/contactosImg/instagramjose.jpg"  content="INSTAGRAM" content2="LONGHUN"/>
            </li>
            <li className="md:col-span-2 md:row-span-1">
                <Card imageSrc={"/assets/contactosImg/longhunig.jpg"} content="YOUTUBE" content2="JOSE KRAITZ"/>  
            </li>
            <li className="md:col-span-3 md:row-span-2">
                <Card2 imageSrc ="/assets/contactosImg/longhunig.jpg" content="INSTAGRAM" content2="_LONGHUN"/>
            </li>
            <li className="md:col-span-3 md:row-span-2">
                <Card2 imageSrc ="/assets/contactosImg/tiktok.jpg" content="TIKTOK" content2="LONG.HUN3"/>
            </li>
       </ul>
       </div>

       <div className="flex items-center justify-center p-10 bg-black md:p-20">
      <div className="flex flex-col gap-10 md:gap-0 md:space-x-8 md:flex-row ">
        <div className="flex space-x-4 lg:mr-40">
          <div className="bg-[#232323] rounded-full flex items-center w-16 h-16 justify-center p-3 md:p-5">
            <FaMapMarkerAlt className="text-base text-white md:text-2xl" />
          </div>
          <div>
            <div className="text-base font-bold text-orange-400 lg:text-2xl">SEDE ASOCIACION CIVIL</div>
            <div className="text-white">
              Asociación civil luchemos por ellos <br />
              Falucho S/N - Villa Itatí, Bernal, Quilmes
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="bg-[#232323] rounded-full flex items-center w-16 h-16 justify-center p-3 md:p-5">
            <FaMapMarkerAlt className="text-base text-white md:text-2xl" />
          </div>
          <div>
            <div className="text-base font-bold text-orange-400 lg:text-2xl">SEDE CENTRAL</div>
            <div className="text-white">
              Chacabuco 835, Bernal, Quilmes
            </div>
          </div>
        </div>
      </div>
    </div>


        
        </>
    );
}

export default Contacto;