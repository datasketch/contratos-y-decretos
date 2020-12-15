import Link from 'next/link';
import Head from 'next/head';

function MethodologyPage() {
  return (
    <>
      <Head>
        <title>Metodología · Contratos y Decretos</title>
      </Head>
      <div
        className="step px-4 py-24 bg-charcoal bg-fixed bg-contain bg-center bg-repeat-y text-white"
        style={{ backgroundImage: 'url(media/cp.png)' }}
      >
        <h1 className="font-black text-4xl text-center md:text-6xl">
          Metodología
        </h1>
      </div>
      <div className="bg-gray-100 text-gray-900">
        <div className="w-full mx-auto md:w-10/12 px-4">
          <div className="max-w-2xl py-12">
            <div className="text-lg space-y-6">
              <h2 className="text-2xl font-semibold">
                ¿De dónde salieron los datos?
              </h2>
              <p>
                Se recopilaron 209 decretos provenientes de la{' '}
                <a
                  className="text-tiryan-purple font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.coronaviruscolombia.com/"
                >
                  Web oficial del Gobierno de Colombia para atender el Covid
                </a>
                , donde están todos los documentos publicados en relación al
                Covid-19, y de la{' '}
                <a
                  className="text-tiryan-purple font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dapre.presidencia.gov.co/normativa/Paginas/dapre.aspx"
                >
                  Web de Presidencia
                </a>
                , donde se publican todos los decretos emitidos por el
                Ejecutivo. Se incluyeron únicamente los decretos publicados
                desde el 13 de marzo y hasta el 1 de octubre de 2020. Estos
                datos luego se cruzaron con los{' '}
                <a
                  className="text-tiryan-purple font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.corteconstitucional.gov.co/comunicados/"
                >
                  comunicados oficiales de la Corte Constitucional
                </a>
                , donde esclarece su decisión tras analizar cada uno los
                decretos seleccionados.
              </p>
              <h2 className="text-2xl font-semibold">
                ¿Cómo se analizaron los datos?
              </h2>
              <p>
                Los alumnos del Seminario de Datos de la Universidad de La
                Sabana, bajo las instrucciones de la profesora María Isabel
                Magaña analizaron los 209 decretos, clasificando su contenido a
                partir de variables preestablecidas. Para la publicación
                filtramos más de 100 decretos cobijados exclusivamente por el
                estado de emergencia, creando una base de datos única que puede <a
                  href="https://datawrapper.dwcdn.net/7n05y/4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tiryan-purple font-semibold"
                >
                  descargarse aquí
                </a>
                .
              </p>
              <h2 className="text-2xl font-semibold">
                ¿Qué variables se tomaron en cuenta?
              </h2>
              <p>
                La base de datos contempla las siguiente variables: número del
                decreto, fecha de expedición, la entidad encargada, el objeto,
                la descripción, si el decreto utiliza o entrega fondos al FOME,
                y si fue revisado por la Corte Constitucional. Se hizo un
                énfasis especial en el manejo de los recursos, especificando
                cuál es la entidad que emite el dinero y a qué entidad van
                destinados, el para qué se utilizaría el dinero, si es o no un
                decreto-ley, si realiza algún nombramiento, y el tiempo de
                vigencia.
              </p>
              <h2 className="text-2xl font-semibold">¿Cuál es el objetivo?</h2>
              <p>
                Hacer veeduría sobre las decisiones tomadas por el gobierno y su
                gabinete en la pandemia para determinar si toda la ampliación
                del poder en este aspecto tiene relación con la mitigación y los
                efectos de la situación de Emergencia en el país.
              </p>
              <p>
                A su vez, el hacer seguimiento de los dineros públicos tiene
                como fin determinar cuáles decretos desde el ejercicio de su
                creación y aplicación pueden despertar algún tipo de alerta de
                irregularidad en alguno de sus procesos.
              </p>
              <p>
                Finalmente publicamos con una base de datos inicial, pero se irá
                ampliando con el desarrollo de la ruta de los dineros públicos
                en el 2021.
              </p>
            </div>
            <Link href="/">
              <a className="bg-tiryan-purple inline-block px-2 py-1 rounded text-white mt-6">
                Volver al inicio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MethodologyPage;
