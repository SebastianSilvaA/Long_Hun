import "./nosotros.css"

export default function Nosotros() {
    return (
        <>
        <div className="flex flex-col justify-center">
        <div className="mt-10">
          <div className="flex items-center justify-center pb-4 text-xl font-bold text-orange-400 md:text-3xl ">NOSOTROS</div>
          <div className="flex items-center justify-center text-3xl font-bold text-center text-white md:text-5xl ">ACADEMIA DE ARTES MARCIALES</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-10 p-4 pb-16 mt-10 lg:gap-2 lg:flex-row">
            <img src="/assets/nosotrosImg/nosotros1.jpg" className="size-2/3 md:size-6/12" alt="Imagen de nosotros" /> 
            <div className="max-w-md mx-10 text-lg text-white md:text-2xl lg:text-2xl">En <span className="text-orange-400">Long Hun</span> nos caracterizamos por ser
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

  <div className="flex flex-col items-stretch justify-center w-full gap-16 p-10 pt-20 mt-0 lg:gap-0 md:mt-20 lg:flex-row back2">
    <div title="PAPAFRANCISCODIV" className="flex flex-col items-center flex-1 mx-4">
    <div className="flex items-center justify-center w-32 h-32 overflow-hidden border-4 border-gray-200 rounded-full md:w-48 md:h-48">
      <div className="relative w-full h-full">
        <img
          src="/assets/nosotrosImg/papalogo.jpg"
          alt="Logo"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
    <div className="max-w-md mt-8 text-lg text-white md:text-2xl lg:text-3xl">
      Nuestra academia se encuentra integrando la <span className="font-bold text-orange-400">S.A.M.C. SDYC. PAPA FRANCISCO</span>; esta institución legal está incorporada al Ministerio de Desarrollo Social de la Nación, a la dirección de Clubes Argentinos, con personería Jurídica propia.<br /><br />Asimismo, contamos con otros aliados importantes, tales como:
    </div>
  </div>
  <div title="TEMPLEDIV" className="flex flex-col items-center flex-1 mx-4">
    <div className="flex items-center justify-center w-32 h-32 overflow-hidden border-4 border-gray-200 rounded-full md:w-48 md:h-48">
      <div className="relative w-full h-full">
        <img
          src="/assets/nosotrosImg/shaolinlogo.jpg"
          alt="Logo"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
    <div className="max-w-md mt-8 text-lg text-white md:text-2xl lg:text-3xl">
      <span className="mr-4 font-bold text-orange-400">SHAOLIN TEMPLE SOUTH AMERICA</span>
, entre otros. Siendo importantes, ya que gracias a ello podemos certificar nuestras actividades, dándole validez legal a las graduaciones, teniendo la posibilidad de integrar Federaciones Nacionales e Internacionales, compartiendo lugar con otras 12 escuelas.
    </div>
  </div>
</div>
        
        </>
    )
}
