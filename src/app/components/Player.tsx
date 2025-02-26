"use client";
import React, { CSSProperties, useRef } from "react";
import { Player as PlayerType } from "./Board";
import { CHARACTERS, STATES } from "@/data/trouble-brewing";
import styles from "./Board.module.css";
import Image from "next/image";

export default function Player({
  player,
  updatePlayer,
  deg,
  removeState,
}: {
  player: PlayerType;
  deg: number;
  updatePlayer: (player: PlayerType) => void;
  removeState: (state: string) => void;
}) {
  const ref = useRef(null);

  return (
    <>
      <div style={{ "--deg": `${deg}deg` } as CSSProperties} className={styles.player}>
        <button popoverTarget={`edit-player-${player.name}`}>
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
      </div>
      {/*  */}
      <div id={`edit-player-${player.name}`} popover="auto" className={styles.popover} ref={ref}>
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

            ref.current?.togglePopover();
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
