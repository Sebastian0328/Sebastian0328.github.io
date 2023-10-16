import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillMoonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

export const Nav = () => {
  return (
    <nav className="flex justify-between bg-red-300 p-4 rounded">
      <a href="https://instagram.com/__saraavl?igshid=MzRlODBiNWFlZA==">
        <div className="flex items-center gap-2">
          <p>Sara Valentina Rodriguez Rodriguez</p>
          <AiFillHeart />
        </div>
      </a>
      <div className="flex item-center gap-2">
        <p>Lo que significas para mi</p>
        <BsFillArrowThroughHeartFill />
      </div>
      <a href="https://instagram.com/svrr08_?igshid=NzZlODBkYWE4Ng==">
        <div className="flex items-center gap-2">
          <p>Siendo tu</p>
          <BsFillMoonStarsFill />
        </div>
      </a>
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
