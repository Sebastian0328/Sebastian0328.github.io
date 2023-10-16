import React from "react";
import { BsMoon } from "react-icons/bs";
export const Palabras = () => {
  return (
    <div>
      <div className="flex items-center gap-3 text-2xl pt-10  ">
        <h2>Acerca de ti </h2>
        <hr />
        <BsMoon />
      </div>
      <div className="flex pt-6 justify-around">
        <div className=" flex flex-col gap-8 w-1/2 bg-indigo-300 p-4 rounded">
          <div className="flex">
            <p>
              ¡Hola mi vida! ¿Como estas? Te queria decir lo mucho que te amo y
              lo eres para mi.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <p>
              Es increible como alguien puede llegar a la vida de uno darle
              nuevos propositos y meta, un desconocido que un momento ya es
              alguien con quien ya planea toda una vida. Fuiste tu esa persona
              que llego a mi vida y me enseño que puedo amar, fuiste tu la
              persona con quien conoci la palabra amor.
            </p>
          </div>
          <div className="flex text-left">
            <p>
              Tu Sara Valentia Rodriguez Rodriguez, me enseño a amar, con cada
              accion y cada cosa que haces por nosotros es una muestra que tu me
              amas tambien por eso mi niña cada cosa que hago es para mostraste
              mi amor por ti.
            </p>
          </div>
          <div className="flex text-left">
            <p>
              Asi que te presento tu pagina, donde puedes ver y recordar lo
              hermosa que eres la mujer tan perfecta que eres, te amo y falta
              poco para ese beso que nos merecemos. Amor entonces como decimos
              con toda o nada !
            </p>
          </div>
        </div>
        <div>
          <img src="public/foto_parada.jpeg" alt="" width="400px" />
        </div>
      </div>
    </div>
  );
};
