import "./styles.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "@/components/primary/footer";

const Portafolio = () => {
    return (
        
        <>
        
        <div className="mt-60">

            <ul className="grid grid-cols-6 grid-rows-2 gap-4 p-10">

            <li className="col-span-3 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p1.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
            </li>
            <li className="col-span-2 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p2.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
            </li>
            <li className="col-span-1 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p3.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
            </li>
            

            <li className="col-span-1 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p6.jpg" alt="Imagen 4" className="w-full h-full object-cover" />
            </li>
            <li className="col-span-2 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p7.jpg" alt="Imagen 5" className="w-full h-full object-cover" />
            </li>
            <li className="col-span-3 row-span-1" style={{ height: '300px' }}>
                <img src="/assets/portafolioImg/p4.jpg" alt="Imagen 6" className="w-full h-full object-cover" />
            </li>
            </ul>
            
        </div>

        

     





  
        </>
    );
}

export default Portafolio;
