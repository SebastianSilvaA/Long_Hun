import Image from "next/image"
import "./nosotros.css"

export default function Nosotros() {
    return (
        <>
        <div className="mt-60">
        <div className=" flex items-center justify-center text-3xl font-bold text-orange-400 pb-4">NOSOTROS</div>
        <div className=" flex items-center justify-center text-white text-5xl font-bold">ACADEMIA DE ARTES MARCIALES</div>
        </div>
        <div className=" pb-16 mt-16 w-full p-4 flex items-center justify-center">
            <img src="/assets/nosotrosImg/nosotros1.jpg" className="size-6/12"></img> 
            <div className=" max-w-md text-white text-2xl ml-10">En <span className="text-orange-400">Long Hun</span> nos caracterizamos por ser
                 una academia encargada de difundir el
                 Kung Fu basado en el programa del Temple
                 Shaolin para Sudamérica, sumando la
                experiencia de otros estilos practicados y
                aprendidos en más de 40 años en el
                camino de las artes marciales.<br /><br />
                Nuestra academia se encuentra integrando
                la secretaría de Artes Marciales del Club
                Social Deportivo y Social del Club Papa
                Francisco Argentina.
            </div>
        </div>

        <div className=" back2 p-10 mt-16 flex items-stretch justify-center w-full">
  <div title="PAPAFRANCISCODIV" className=" flex flex-col items-center mx-4 flex-1">
    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/assets/nosotrosIMG/papalogo.jpg"
          alt="Logo"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
    </div>
    <div className=" mt-8 text-white text-3xl max-w-md mt-4">
      Nuestra academia se encuentra integrando la <span className="text-orange-400 font-bold">S.A.M.C. SDYC. PAPA FRANCISCO</span>; esta institución legal está incorporada al Ministerio de Desarrollo Social de la Nación, a la dirección de Clubes Argentinos, con personería Jurídica propia.<br /><br />Asimismo, contamos con otros aliados importantes, tales como:
    </div>
  </div>
  <div title="TEMPLEDIV" className="flex flex-col items-center mx-4 flex-1">
    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/assets/nosotrosIMG/shaolinlogo.jpg"
          alt="Logo"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
    </div>
    <div className=" mt-8 text-white text-3xl max-w-md mt-4">
      <span className="text-orange-400 font-bold mr-4">SHAOLIN</span>
      <span className="text-orange-400 font-bold mr-4">TEMPLE</span>
      <span className="text-orange-400 font-bold mr-4">SOUTH</span>
      <span className="text-orange-400 font-bold">AMERICA</span>, entre otros. Siendo importantes, ya que gracias a ello podemos certificar nuestras actividades, dándole validez legal a las graduaciones, teniendo la posibilidad de integrar Federaciones Nacionales e Internacionales, compartiendo lugar con otras 12 escuelas.
    </div>
  </div>
</div>



        
        </>
    )
}