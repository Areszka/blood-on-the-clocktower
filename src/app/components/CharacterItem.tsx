"use client";
import React from "react";
import Image from "next/image";
import { CHARACTERS } from "@/data/trouble-brewing";

export default function CharacterItem({ name, power }: { name: string; power: string }) {
  const [isShown, setIsShown] = React.useState(false);

  const engName = CHARACTERS.find((character) => character.name.pl === name)?.name.en ?? "";

  return (
    <li>
      <a href={`https://wiki.bloodontheclocktower.com/${engName}`} target="_blank">
        <Image
          alt="logo"
          src={`/Icon_${engName.toLowerCase().split(" ").join("")}.png`}
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
