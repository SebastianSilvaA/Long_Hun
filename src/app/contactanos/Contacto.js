import Card2 from "@/components/primary/card2";
import "./styles.css"
import Card from "@/components/primary/card"
import { FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
    return (
        <>
        
        
        
         <div className="mt-60">
        <div className="flex items-center justify-center pb-3 text-3xl font-bold text-orange-400 ">REDES SOCIALES</div>
        <div className="flex items-center justify-center text-4xl font-bold text-white ">LONG HUN</div>
        </div>
       <ul className="grid grid-cols-6 grid-rows-2 gap-4 p-20" style={{ gridTemplateRows: 'repeat(2, 450px)' }}>
            <li className="col-span-2 row-span-1">
                <Card imageSrc ="/assets/contactosImg/facebook.jpg" content="FACEBOOK" content2="JOSE KRAITZ"/>
            </li>
            <li className="col-span-2 row-span-1">
                <Card  imageSrc ="/assets/contactosImg/instagramjose.jpg"  content="INSTAGRAM" content2="LONGHUN"/>
            </li>
            <li className="col-span-2 row-span-1">
                <Card imageSrc={"/assets/contactosImg/longhunig.jpg"} content="YOUTUBE" content2="JOSE KRAITZ"/>  
            </li>
            <li className="col-span-3 row-span-2">
                <Card2 imageSrc ="/assets/contactosImg/longhunig.jpg" content="INSTAGRAM" content2="_LONGHUN"/>
            </li>
            <li className="col-span-3 row-span-2">
                <Card2 imageSrc ="/assets/contactosImg/tiktok.jpg" content="TIKTOK" content2="LONG.HUN3"/>
            </li>
       </ul>

       <div className="flex items-center justify-center bg-black p-20">
      <div className="flex space-x-8 ">
        <div className="flex items-center space-x-4 mr-40">
          <div className="bg-[#232323] rounded-full p-5">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>
          <div>
            <div className="text-orange-400 text-2xl font-bold">SEDE ASOCIACION CIVIL</div>
            <div className="text-white">
              Asociación civil luchemos por ellos <br />
              Falucho S/N - Villa Itatí, Bernal, Quilmes
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-[#232323] rounded-full p-5">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>
          <div>
            <div className="text-orange-400 text-2xl font-bold">SEDE CENTRAL</div>
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