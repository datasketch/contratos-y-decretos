function Footer() {
  return (
    <footer className="font-lato antialiased">
      <div
        className="bg-charcoal px-4 py-12 bg-center bg-contain bg-repeat-y text-white md:bg-no-repeat"
        style={{ backgroundImage: 'url(media/cp.png)' }}
      >
        <p className="font-black text-xl text-center">Créditos</p>
        <div className="grid grid-cols-1 gap-y-12 mt-12 md:grid-cols-3">
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">Dirección</p>
            <div className="leading-tight mt-3">
              <p>
                Diana Salinas
                <a
                  href="https://twitter.com/DianaSalinasP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@DianaSalinasP)
                </a>
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">
              Coordinación y Edición
            </p>
            <div className="leading-tight mt-3">
              <p>Diana Salinas</p>
              <p>
                Ingrid Ramírez Fuquen
                <a
                  href="https://twitter.com/_iramir_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@_iramir_)
                </a>
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">
              Alertas de corrupción
            </p>
            <div className="leading-tight mt-3">
              <p>
                Juan David Oviedo
                <a
                  href="https://twitter.com/JuanOv13do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@JuanOv13do)
                </a>
              </p>
              <p className="font-normal text-sm mt-1">
                Asesor e Investigador de Políticas Públicas
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">
              Edición jurídica
            </p>
            <div className="leading-tight mt-3">
              <p>
                Camilo Vallejo
                <a
                  href="https://twitter.com/CamiloVallejoG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@CamiloVallejoG)
                </a>
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">Diseño</p>
            <div className="leading-tight mt-3">
              <p>
                Heidy González
                <a
                  href="https://twitter.com/HeidyBlue9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@HeidyBlue9)
                </a>
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">
              Desarrollo web
            </p>
            <div className="leading-tight mt-3">
              <p>
                Datasketch
                <a
                  href="https://twitter.com/datasketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal"
                >
                  (@datasketch)
                </a>
              </p>
            </div>
          </div>
          <div className="font-black text-center text-lg flex flex-col items-center md:col-span-3">
            <p className="bg-tiryan-purple py-1 px-4 leading-none">
              Base de datos Decretos
            </p>
            <div className="leading-tight mt-3 font-normal max-w-2xl mx-auto">
              <p>
                Estudiantes del Seminario de Datos de la Universidad de La
                Sabana apoyaron únicamente la construcción de la base de datos, bajo el liderazgo de la profesora{' '}
                <a
                  href="https://twitter.com/marisamagar"
                  className="font-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  María Isabel Magaña
                </a>
                :
              </p>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                <li>Jesus Steven Bernal Castro</li>
                <li>Santiago Díaz Gamboa</li>
                <li>Germán Andrés Enciso Florez</li>
                <li>Diana Carolina Estupiñán Meneses</li>
                <li>Sara Alejandra Forero Lesmes</li>
                <li>Lauryn Jannieth García Castiblanco</li>
                <li>Santiago González Barrera</li>
                <li>Juan Diego López Piraquive</li>
                <li>Valeria Marcoux Calle</li>
                <li>Laura Valentina Mercado Hernández</li>
                <li>Camila Andrea Mestra Correa</li>
                <li>Magda Sofía Rodríguez Mendoza</li>
                <li>María Valentina Serrano Jaime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4">
        <div className="flex justify-center divide-x-2 divide-white -mx-4">
          <div className="px-4">
            <img className="w-40" src="media/logo_cp.png" alt="" />
          </div>
          <div className="px-4 text-white leading-tight text-sm flex flex-col justify-center">
            <p className="text-red-crayola">&copy; Cuestión Pública 2020</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
