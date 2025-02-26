"use client";
import React, { FormEvent, useState } from "react";
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

  const characterPL = CHARACTERS.find((c) => c.name.en === player.character)?.name.pl ?? "none";

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

          {characterPL !== "none" && <p className={styles.character}>{characterPL}</p>}
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
          <dialog open={isOpen} onClick={() => setIsOpen(false)}>
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <h1>{player.name}</h1>
              <form
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const character = event.currentTarget.character.value;
                  const selectedStates = event.currentTarget.states.selectedOptions;

                  const states = [];
                  for (let i = 0; i < selectedStates.length; i++) {
                    states.push(selectedStates[i].value);
                  }

                  updatePlayer({ ...player, character, states: states });
                  setIsOpen(false);
                }}
              >
                <select defaultValue={player.character} id="character">
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
                <select
                  multiple
                  id="states"
                  defaultValue={player.states}
                  className={styles.select}
                  size={STATES.length}
                >
                  {STATES.map((state) => (
                    <option value={state.en} key={state.en}>
                      {state.pl}
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
  const statePL = STATES.find((s) => s.en === children)?.pl ?? "";
  return (
    <button
      className={styles.tag}
      onClick={() => {
        removeState(children);
      }}
    >
      {statePL}
    </button>
  );
}
