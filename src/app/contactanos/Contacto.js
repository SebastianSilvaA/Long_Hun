import Card2 from "@/components/primary/card2";
import "./styles.css"
import Card from "@/components/primary/card"

const Contacto = () => {
    return (
        <>
         <div className="mt-60">
        <div className=" flex items-center justify-center text-3xl font-bold text-orange-400 pb-3">REDES SOCIALES</div>
        <div className=" flex items-center justify-center text-white text-4xl font-bold">LONG HUN</div>
        </div>
       <div className="flex justify-center aling-items-center">

        <Card imageSrc ="/assets/contactosImg/facebook.jpg" content="FACEBOOK" content2="JOSE KRAITZ"/>
        <Card  imageSrc ="/assets/contactosImg/instagramjose.jpg"  content="INSTAGRAM" content2="LONGHUN"/>
        <Card imageSrc={"/assets/contactosImg/longhunig.jpg"} content="YOUTUBE" content2="JOSE KRAITZ"/>
       
       </div>

       <div>
        <Card2 imageSrc ="/assets/contactosImg/longhunig.jpg" content="YOUTUBE" content2="JOSE KRAITZ"/>
       </div>


        
        </>
    );
}

export default Contacto;