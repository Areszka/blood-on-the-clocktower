"use client";
import { CHARACTERS } from "@/data/trouble-brewing";
import React, { FormEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./Board.module.css";

export default function ShuffleButton({
  updatePlayers,
}: {
  updatePlayers: (array: string[]) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Shuffle
      </button>
      {isOpen &&
        createPortal(
          <dialog open={isOpen} onClick={() => setIsOpen(false)}>
            <div onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setIsOpen(false)}>x</button>
              <form
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const selectedOptions = event.currentTarget.character.selectedOptions;

                  const characters = [];
                  for (let i = 0; i < selectedOptions.length; i++) {
                    characters.push(selectedOptions[i].value);
                  }

                  shuffle(characters);
                  updatePlayers(characters);
                  setIsOpen(false);
                }}
              >
                <select
                  name="character"
                  id="character"
                  size={CHARACTERS.length}
                  multiple
                  className={styles.select}
                >
                  <optgroup label="Mieszczanie">
                    {CHARACTERS.filter((c) => c.type.en === "Townsfolk").map((character) => (
                      <option value={character.name.en} key={character.name.en}>
                        {character.name.pl}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Wyrzutki">
                    {CHARACTERS.filter((c) => c.type.en === "Outsider").map((character) => (
                      <option value={character.name.en} key={character.name.en}>
                        {character.name.pl}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Poplecznicy">
                    {CHARACTERS.filter((c) => c.type.en === "Minion").map((character) => (
                      <option value={character.name.en} key={character.name.en}>
                        {character.name.pl}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Demony">
                    {CHARACTERS.filter((c) => c.type.en === "Demon").map((character) => (
                      <option value={character.name.en} key={character.name.en}>
                        {character.name.pl}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <button>Shuffle</button>
              </form>
            </div>
          </dialog>,
          document.body
        )}
    </>
  );
}

function shuffle(array: string[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}
