import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Footer = () => {
    return (
        <>

<div className="flex flex-col p-10 text-white bg-black lg:items-start lg:justify-center lg:flex-row">
  <div className="flex flex-col w-full md:flex-row md:w-1/2">
    <div className="flex-1 p-4 overflow-hidden">
      <div className="mb-2 text-xl font-semibold text-orange-400">LONG HUN</div>
      <div className="text-sm md:text-base">
        Somos una academia de artes marciales chicas, donde podrás aprender Kung Fu Shaolin, Sanda, Taichi Chen, Kung Fu tradicional y defensa personal.
      </div>
    </div>

    <div className="flex-1 p-4 overflow-hidden">
      <div className="mb-2 text-xl font-semibold">LINK DE INTERÉS</div>
      <ul className="pl-0 list-none">
        <li className="flex items-center mb-2">
          <a href="https://example.com/nosotros" className="flex items-center text-white no-underline hover:text-orange-400">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">Nosotros</span>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://example.com/redes-sociales" className="flex items-center text-white no-underline hover:text-orange-400">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">Redes Sociales</span>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://example.com/portafolio" className="flex items-center text-white no-underline hover:text-orange-400">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">Portafolio</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col w-full md:flex-row md:w-1/2">
    <div className="flex-1 p-4 overflow-hidden">
      <div className="mb-2 text-xl font-semibold">CONTÁCTANOS</div>
      <ul className="pl-0 list-none">
        <li className="flex items-center mb-2">
          <a 
            href="https://wa.me/5491159665603?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20escuela%20Long%20Hun." 
            className="flex items-center text-white no-underline hover:text-orange-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">whatsapp</span>
            <FaWhatsapp className="ml-2"/>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="mailto:clubsdycpapafrancisco@gmail.com" className="flex items-center text-white no-underline hover:text-orange-400">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">clubsdycpapafrancisco@gmail.com</span>
            <MdOutlineMail className="ml-2"/>
          </a>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://maps.google.com/?q=Chacabuco+835,+Bernal,+Quilmes" target="_blank" className="flex items-center text-white no-underline hover:text-orange-400">
            <MdOutlineKeyboardArrowRight/>
            <span className="ml-0 text-sm md:ml-2">Chacabuco 835, Bernal, Quilmes</span>
            <SiGooglemaps className="ml-2"/>
          </a>
        </li>
      </ul>
    </div>

    <div className="flex-1 p-4 overflow-hidden">
      <div className="mb-2 text-xl font-semibold">NOVEDADES</div>
      <div className="text-sm md:text-base">
        Actualízate en nuestra página web o contáctanos para cualquier otra información.
      </div>
      <button className="px-4 py-2 mt-4 text-black bg-orange-400 rounded">Más Info</button>
    </div>
  </div>
  </div>

  <footer className="flex items-center justify-between p-5 bg-customBlack">
    <div className="justify-start mx-10 text-white text-2xs md:text-xs">
        © Copyright Long Hun Todos los derechos reservados 2024
    </div>
    <div className="justify-end mr-10 text-white text-2xs md:text-xs">
        Desarrollado por 
        <a  href="https://github.com/SebastianSilvaA" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-400 hover:underline">Sebastián Silva </a>

          y  
         
        <a href="https://github.com/CamilaCastro98" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-400 hover:underline">Camila Castro </a>
        Diseñado por 
        <a href="https://github.com/MelanieZamalloa" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-400 hover:underline">Melanie Zamalloa</a>
    </div>
</footer>


        </>
    )
}


export default Footer