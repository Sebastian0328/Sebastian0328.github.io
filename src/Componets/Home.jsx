import React from "react";
import { Palabras } from "./Palabras";

export const Home = () => {
  return (
    <div className="flex flex-col pt-16">
      <h1 className="text-center text-6xl">
        Mi amor hermosa te presento tu pagina, donde te digo lo mucho que te
        amo.
      </h1>
      <Palabras />
    </div>
  );
};
