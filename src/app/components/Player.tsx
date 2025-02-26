"use client";
import React, { CSSProperties, useRef } from "react";
import { Player as PlayerType } from "./Board";
import { CHARACTERS } from "@/data/trouble-brewing";
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
          {player.isDead && <Tag removeState={removeState}>Dead</Tag>}
          {player.isDrunk && <Tag removeState={removeState}>Drunk</Tag>}
          {player.isPoisoned && <Tag removeState={removeState}>Poisoned</Tag>}
        </div>
      </div>
      {/*  */}
      <div id={`edit-player-${player.name}`} popover="auto" className={styles.popover} ref={ref}>
        <h1>{player.name}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const character = event.currentTarget.character.value;
            const isDrunk = event.currentTarget.drunk.checked;
            const isDead = event.currentTarget.dead.checked;
            const isPoisoned = event.currentTarget.poisoned.checked;

            updatePlayer({ ...player, character, isDead, isDrunk, isPoisoned });

            ref.current?.togglePopover();
          }}
        >
          <select defaultValue={player.character} id="character">
            <option>Chose character...</option>
            {CHARACTERS.map((character) => (
              <option value={character.name} key={character.name}>
                {character.name}
              </option>
            ))}
          </select>
          <label>
            Drunk
            <input type="checkbox" id="drunk" defaultChecked={player.isDrunk} />
          </label>
          <label>
            Dead
            <input type="checkbox" id="dead" defaultChecked={player.isDead} />
          </label>
          <label>
            Poisoned
            <input type="checkbox" id="poisoned" defaultChecked={player.isPoisoned} />
          </label>
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
