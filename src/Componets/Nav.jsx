import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillMoonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

export const Nav = () => {
  return (
    <nav className="flex justify-between bg-indigo-300 p-4 rounded">
      <div className="flex items-center gap-2">
        <p>Sara Valentina Rodriguez Rodriguez</p>
        <AiFillHeart />
      </div>
      <div className="flex item-center gap-2">
        <p>Lo que significas para mi</p>
        <BsFillArrowThroughHeartFill />
      </div>
      <div className="flex items-center gap-2">
        <p>Siendo tu</p>
        <BsFillMoonStarsFill />
      </div>
      <div className="flex items-center gap-2">
        <p>Nosotros</p>
        <div className="flex">
          <BsFillMoonFill />
          <AiFillStar />
        </div>
      </div>
    </nav>
  );
};
