import Link from 'next/link';
import scrollama from 'scrollama';
import { useEffect, useRef } from 'react';

function Intro() {
  const wrapper = useRef(null);
  useEffect(() => {
    const scroller = scrollama();
    scroller
      .setup({
        progress: true,
        offset: 0,
        step: '.step',
      })
      .onStepProgress(({ progress }) => {
        wrapper.current.style.opacity = 1 - progress * 6;
      });
  }, []);
  return (
    <div
      className="step bg-charcoal bg-fixed bg-contain bg-center bg-repeat-y text-white"
      style={{ backgroundImage: 'url(media/cp.png)' }}
    >
      <div className="bg-red-crayola fixed inline-flex md:flex-col md:top-1/2 left-0 p-2 md:space-y-1 rounded-tr-md rounded-br-md transform md:-translate-y-1/2 z-10">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://cuestionpublica.com/contratos-y-decretos&quote=Alertas de riesgo de corrupción en los decretos presidenciales"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7" src="media/fb.png" alt="" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Alertas de riesgo de corrupción en los decretos presidenciales&url=https://cuestionpublica.com/contratos-y-decretos&via=cuestion_p"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7" src="media/tw.png" alt="" />
        </a>
        <a
          href="https://www.instagram.com/cuestionp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7" src="media/ig.png" alt="" />
        </a>
      </div>
      <div ref={wrapper} className="sticky top-0 w-full h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <img
            className="w-64 md:w-1/2 lg:w-1/3 mx-auto"
            src="media/logo_slqh.png"
            alt=""
          />
          <div className="max-w-sm md:max-w-md mx-auto">
            <div className="bg-tiryan-purple text-center transform -skew-x-12">
              <p className="text-xl md:text-2xl font-black transform skew-x-12">
                #dequédecretomehablasviejo
              </p>
            </div>
            <p className="font-black text-xl md:text-4xl text-center leading-none mt-2">
              Alertas de riesgo de corrupción en los decretos presidenciales
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6 text-lg max-w-xl mx-auto md:text-xl py-16 relative px-4 lg:text-2xl lg:max-w-2xl">
        <p>
          Te hablamos de más de 100 decisiones gubernamentales que fueron
          tomadas por el presidente y su gabinete en la pandemia. Este boquete
          se abrió gracias a que en{' '}
          <a
            className="bg-tiryan-purple bg-opacity-75"
            href="https://coronaviruscolombia.gov.co/Covid-19/docs/decretos/general/51_Presidencia_Decreto_417.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            marzo
          </a>{' '}
          y{' '}
          <a
            className="bg-tiryan-purple bg-opacity-75"
            href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20637%20DEL%206%20DE%20MAYO%20DE%202020.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            mayo
          </a>{' '}
          fueron decretados dos Estados de Emergencia Económica, Social y
          Ecológica que, por su carácter constitucional, autorizaron a la
          presidencia para expedir decretos con fuerza de ley, sin tener que
          pasar por el Congreso.
        </p>
        <p>
          En paralelo, el Gobierno nacional anunció que destinarían{' '}
          <a
            className="bg-tiryan-purple bg-opacity-75"
            href="https://id.presidencia.gov.co/Paginas/prensa/2020/Colombia-invierte-cerca-de-117-billones-de-pesos-para-atender-la-Emergencia-Economica-por-la-pandemia-del-covid-19-200527.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            $117 billones
          </a>
          , el 11,04% del PIB, para atender la crisis generada por el
          coronavirus, aunque realmente sólo se han dispuesto $41 billones en el
          Fondo de Mitigación de Emergencias (FOME) y hasta el 4 de diciembre
          tan sólo se han ejecutado efectivamente $14 billones según el{' '}
          <a
            className="bg-tiryan-purple bg-opacity-75"
            href="https://www.minhacienda.gov.co/webcenter/portal/MedidasCOVID19/pages_medidas-covid19"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministerio de Hacienda
          </a>
          . Además, estos gastos no se han reportado con{' '}
          <a
            className="bg-tiryan-purpl leading-nonee"
            href="https://www.ofiscal.org/post/nueva-revisi%C3%B3n-del-fome-y-los-mismos-viejos-problemas"
            target="_blank"
            rel="noopener noreferrer"
          >
            transparencia
          </a>
          .
        </p>
        <p>
          ¿Cuántas y cuáles medidas de ley quedaron impuestas por el presidente
          y su gabinete en ese periodo?, ¿cómo se distribuyeron esos recursos a
          través del FOME? Con este trabajo de periodismo de datos planteamos
          una revisión a las medidas decretadas relacionadas con la emergencia,
          según nuestro asesor, con el fin de determinar si los superpoderes que
          se otorgó el presidente, a través del estado de emergencia,
          correspondieron con la mitigación y los efectos de la situación de
          pandemia en el país.
        </p>
        <p>
          Por último, clasificamos las alertas por riesgos de corrupción por
          colores: rojo, alerta de riesgo grave; amarillo, alerta de riesgo
          medio; verde: sin riesgo. La mayoría de alertas están sujetas a la
          falta de transparencia en los decretos para conocer su ruta y saber
          realmente el destino e inversión de esos recursos. También describimos
          las razones de esas alertas. Puedes filtrar búsquedas según tu
          necesidad, para eso son los botones que encuentras abajo de la tabla.
          Sin embargo, si quieres puedes buscar por palabras, también hay una
          barra dispuesta para esto. Todos los resultados los puedes descargar.
        </p>
        <p>
          Este espacio lo construimos en alianza con los estudiantes del
          Seminario de Datos de la Universidad de La Sabana, Juan David Oviedo,
          asesor e investigador de políticas públicas y el equipo de Cuestión
          Pública.
        </p>
        <p className="text-center">
          <Link href="/metodologia">
            <a className="bg-tiryan-purple inline-block px-2 py-1 rounded-lg">
              Metodología
            </a>
          </Link>
        </p>
        <div className="flex items-center justify-center space-x-2 mt-6">
          <img className="w-24" src="media/logo_cp_white.png" alt="" />
          {/* <img className="w-32" src="media/logo_unisabana.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
