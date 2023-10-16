import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Nav } from "./Componets/Nav";
import { Home } from "./Componets/Home";
import { Gallery } from "./Componets/Gallery";

function App() {
  return (
    <>
      <div className=" p-10 bg-red-100 font-Alumni">
        <Nav />
        <Home />
        <Gallery />
      </div>
    </>
  );
}

export default App;
