import Card2 from "@/components/primary/card2";
import "./styles.css"
import Card from "@/components/primary/card"

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
                <Card2 imageSrc ="/assets/contactosImg/longhunig.jpg" content="YOUTUBE" content2="JOSE KRAITZ"/>
            </li>
            <li className="col-span-3 row-span-2">
                <Card2 imageSrc ="/assets/contactosImg/longhunig.jpg" content="YOUTUBE" content2="JOSE KRAITZ"/>
            </li>
       </ul>


        
        </>
    );
}

export default Contacto;