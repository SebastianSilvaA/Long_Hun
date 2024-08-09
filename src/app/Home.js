import Header from "@/components/primary/Header";
import Nosotros from "./nosotros/nosotros";
import Contacto from "./contactanos/Contacto";
import Portafolio from "./portafolio/Portafolio";
import Footer from "@/components/primary/footer";
import Popup from "@/components/primary/pop";



export default function Home() {
  return (
    <>
    <Popup/>
    <Header/>
    <Nosotros/>
    <Contacto/>
    <Portafolio />
    <Footer/>
    </>
  );
}
