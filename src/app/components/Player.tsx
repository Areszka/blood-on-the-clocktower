"use client";
import React, { useState } from "react";
import { Player as PlayerType } from "./Board";
import { CHARACTERS, STATES } from "@/data/trouble-brewing";
import styles from "./Board.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function Player({
  player,
  updatePlayer,
  removeState,
}: {
  player: PlayerType;
  updatePlayer: (player: PlayerType) => void;
  removeState: (state: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        drag
        whileDrag={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        className={styles.player}
        dragMomentum={false}
      >
        <button onClick={() => setIsOpen(true)}>
          <Image
            alt="logo"
            src={`/Icon_${player.character.toLowerCase().split(" ").join("")}.png`}
            width={120}
            height={120}
          />
          <p
            style={{
              color: "gray",
            }}
          >
            {player.name}
          </p>

          <p className={styles.character}>{player.character}</p>
        </button>
        <div className={styles.tags}>
          {player.states.map((state) => (
            <Tag key={state} removeState={removeState}>
              {state}
            </Tag>
          ))}
        </div>
      </motion.div>
      {/*  */}
      {isOpen &&
        createPortal(
          <dialog open={isOpen}>
            <div>
              <h1>{player.name}</h1>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const character = event.currentTarget.character.value;
                  const selectedStates = event.target.states.selectedOptions;

                  const states = [];
                  for (let i = 0; i < selectedStates.length; i++) {
                    states.push(selectedStates[i].value);
                  }

                  updatePlayer({ ...player, character, states: states });
                  setIsOpen(false);
                }}
              >
                <select defaultValue={player.character} id="character">
                  <option value="none">Chose character...</option>
                  {CHARACTERS.map((character) => (
                    <option value={character.name} key={character.name}>
                      {character.name}
                    </option>
                  ))}
                </select>
                <select
                  multiple
                  id="states"
                  defaultValue={player.states}
                  className={styles.select}
                  size={STATES.length}
                >
                  {STATES.map((state) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <button>Update</button>
              </form>
            </div>
          </dialog>,
          document.body
        )}
    </>
  );
}

function Tag({
  children,
  removeState,
}: {
  children: string;
  removeState: (state: string) => void;
}) {
  return (
    <button
      className={styles.tag}
      onClick={() => {
        removeState(children);
      }}
    >
      {children}
    </button>
  );
}
