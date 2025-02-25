"use client";
import React from "react";
import Image from "next/image";

export default function CharacterItem({ name, power }: { name: string; power: string }) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <li>
      <a href={`https://wiki.bloodontheclocktower.com/${name}`} target="_blank">
        <Image
          alt="logo"
          src={`/Icon_${name.toLowerCase().split(" ").join("")}.png`}
          width={52}
          height={52}
        />
      </a>
      <div onClick={() => setIsShown(!isShown)}>
        <h3>{name}</h3>
        {isShown && <p>{power}</p>}
      </div>
    </li>
  );
}
