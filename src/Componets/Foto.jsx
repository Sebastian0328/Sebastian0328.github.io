import React from "react";

export const Foto = ({ foto }) => {
  return (
    <div>
      <img src={`src/assets/${foto}`} alt="" width="300px" />
    </div>
  );
};
