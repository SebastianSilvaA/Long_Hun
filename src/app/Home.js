import Header from "@/components/primary/Header";
import Nosotros from "./nosotros/nosotros";
import Contacto from "./contactanos/Contacto";
import Portafolio from "./portafolio/Portafolio";
import Footer from "@/components/primary/footer";



export default function Home() {
  return (
    <>
    <Header/>
    <Nosotros/>
    <Contacto/>
    <Portafolio />
    <Footer/>
    </>
  );
}
