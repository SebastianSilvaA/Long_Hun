import Image from "next/image"
import "./nosotros.css"

export default function Nosotros() {
    return (
        <>
        <div className="flex flex-col justify-center">
        <div className="mt-60">
          <div className="flex items-center justify-center pb-4 text-3xl font-bold text-orange-400 ">NOSOTROS</div>
          <div className="flex items-center justify-center text-5xl font-bold text-center text-white ">ACADEMIA DE ARTES MARCIALES</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 pb-16 mt-16 md:flex-row">
            <img src="/assets/nosotrosImg/nosotros1.jpg" className="size-2/3 md:size-6/12"></img> 
            <div className="max-w-md ml-10 text-2xl text-white ">En <span className="text-orange-400">Long Hun</span> nos caracterizamos por ser
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
        </div>

  <div className="flex flex-col items-stretch justify-center w-full gap-10 p-10 mt-16 lg:flex-row back2">
    <div title="PAPAFRANCISCODIV" className="flex flex-col items-center flex-1 mx-4">
    <div className="flex items-center justify-center w-48 h-48 overflow-hidden border-4 border-gray-200 rounded-full">
      <div className="relative w-full h-full">
        <Image
          src="/assets/nosotrosIMG/papalogo.jpg"
          alt="Logo"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
    </div>
    <div className="max-w-md mt-8 text-3xl text-white">
      Nuestra academia se encuentra integrando la <span className="font-bold text-orange-400">S.A.M.C. SDYC. PAPA FRANCISCO</span>; esta institución legal está incorporada al Ministerio de Desarrollo Social de la Nación, a la dirección de Clubes Argentinos, con personería Jurídica propia.<br /><br />Asimismo, contamos con otros aliados importantes, tales como:
    </div>
  </div>
  <div title="TEMPLEDIV" className="flex flex-col items-center flex-1 mx-4">
    <div className="flex items-center justify-center w-48 h-48 overflow-hidden border-4 border-gray-200 rounded-full">
      <div className="relative w-full h-full">
        <Image
          src="/assets/nosotrosIMG/shaolinlogo.jpg"
          alt="Logo"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
    </div>
    <div className="max-w-md mt-8 text-3xl text-white ">
      <span className="mr-4 font-bold text-orange-400">SHAOLIN TEMPLE SOUTH AMERICA</span>
, entre otros. Siendo importantes, ya que gracias a ello podemos certificar nuestras actividades, dándole validez legal a las graduaciones, teniendo la posibilidad de integrar Federaciones Nacionales e Internacionales, compartiendo lugar con otras 12 escuelas.
    </div>
  </div>
</div>



        
        </>
    )
}