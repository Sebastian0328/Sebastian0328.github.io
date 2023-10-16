import React from "react";

export const Foto = ({ foto }) => {
  return (
    <div>
      <img src={`/${foto}`} alt="" width="300px" />
    </div>
  );
};
