import React from "react";
import { Foto } from "./Foto";
import { BsMoonStars } from "react-icons/bs";

export const Gallery = () => {
  const fotos = [
    "foto1.jpeg",
    "foto_2.jpeg",
    "foto_3.jpeg",
    "foto4.jpeg",
    "foto5.jpeg",
    "foto6.jpeg",
    "f7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
  ];
  return (
    <div className="flex flex-col gap-5 pt-10">
      <div>
        <h2 className=" flex items-center justify-center gap-3 text-3xl">
          Siendo tu <BsMoonStars />
        </h2>
      </div>
      <div className="flex flex-wrap justify-around gap-4">
        {fotos.map((foto) => {
          return <Foto foto={foto} />;
        })}
      </div>
    </div>
  );
};
