"use client";
import { CHARACTERS } from "@/data/trouble-brewing";
import React from "react";
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
          <dialog open={isOpen}>
            <div>
              <button onClick={() => setIsOpen(false)}>x</button>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const selectedOptions = event.target.character.selectedOptions;

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
                  {CHARACTERS.map((character) => (
                    <option value={character.name} key={character.name}>
                      {character.name}
                    </option>
                  ))}
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
