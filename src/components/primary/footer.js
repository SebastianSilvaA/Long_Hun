import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Footer = () => {
    return (
        <>

<div className="flex items-start justify-center p-10 text-white space-x-10 bg-black">
    <div className="flex-1 p-4 overflow-hidden">
      <div className="text-orange-400 text-xl font-semibold mb-2">LONG HUN</div>
      <div>
        Somos una academia de artes marciales chicas, donde podrás aprender Kung Fu Shaolin, Sanda, Taichi Chen, Kung Fu tradicional y defensa personal.
      </div>
    </div>

    <div className="flex-1 p-4 overflow-hidden">
      <div className="text-xl font-semibold mb-2">LINK DE INTERÉS</div>
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <a href="https://example.com/nosotros" className="flex items-center text-white hover:text-orange-400 no-underline">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">Nosotros</span>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://example.com/redes-sociales" className="flex items-center text-white hover:text-orange-400 no-underline">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">Redes Sociales</span>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://example.com/portafolio" className="flex items-center text-white hover:text-orange-400 no-underline">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">Portafolio</span>
          </a>
        </li>
      </ul>
    </div>

    <div className="flex-1 p-4 overflow-hidden">
      <div className="text-xl font-semibold mb-2">CONTÁCTANOS</div>
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <a 
            href="https://wa.me/5491159665603?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20escuela%20Long%20Hun." 
            className="flex items-center text-white hover:text-orange-400 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">whatsapp</span>
            <FaWhatsapp className="ml-2"/>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="mailto:clubsdycpapafrancisco@gmail.com" className="flex items-center text-white hover:text-orange-400 no-underline">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">clubsdycpapafrancisco@gmail.com</span>
            <MdOutlineMail className="ml-2"/>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://maps.google.com/?q=Chacabuco+835,+Bernal,+Quilmes" target="_blank" className="flex items-center text-white hover:text-orange-400 no-underline">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-2">Chacabuco 835, Bernal, Quilmes</span>
            <SiGooglemaps className="ml-2"/>
          </a>
        </li>
      </ul>
    </div>

    <div className="flex-1 p-4 overflow-hidden">
      <div className="text-xl font-semibold mb-2">NOVEDADES</div>
      <div>
        Actualízate en nuestra página web o contáctanos para cualquier otra información.
      </div>
      <button className="mt-4 px-4 py-2 bg-orange-400 text-black rounded">Más Info</button>
    </div>
  </div>

        <footer className="flex justify-between items-center p-5 bg-customBlack">
            <div className="text-white text-xs justify-start ml-10">© Copyright Long Hun Todos los derechos reservados 2024 </div>
            <div className="text-white text-xs justify-end mr-10">Desarrollado por <button className="text-orange-400"> Sebastián Silva</button> y <button className="text-orange-400"> Camila Castro</button> Diseñado por <button className="text-orange-400">Melanie Zamalloa</button></div>
        </footer>


        </>
    )
}


export default Footer