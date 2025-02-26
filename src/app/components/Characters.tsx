"use client";
import React from "react";
import styles from "./Board.module.css";
import { CHARACTERS } from "@/data/trouble-brewing";
import CharacterItem from "./CharacterItem";
import { Player } from "./Board";

export default function Characters({ data }: { data: Player[] }) {
  const playersCharacters = data.map((player) => player.character).filter((c) => c !== "none");
  const charactersInGame = CHARACTERS.filter((character) =>
    playersCharacters.includes(character.name)
  );

  return (
    <div className={styles.side}>
      {charactersInGame.length > 0 && <h3>In Game</h3>}
      <ul>
        {charactersInGame.map((character) => (
          <CharacterItem name={character.name} power={character.power} key={character.name} />
        ))}
      </ul>
      <h3>Other</h3>
      <ul>
        {CHARACTERS.map((character) => {
          if (playersCharacters.includes(character.name)) {
            return;
          }
          return (
            <CharacterItem name={character.name} power={character.power} key={character.name} />
          );
        })}
      </ul>
    </div>
  );
}
