"use client";
import React, { CSSProperties } from "react";
import { Player as PlayerType } from "./Board";
import { CHARACTERS } from "@/data/trouble-brewing";
import styles from "./Board.module.css";
import { createPortal } from "react-dom";
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
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <div style={{ "--deg": `${deg}deg` } as CSSProperties} className={styles.player}>
        <button onClick={() => setModalIsOpen(true)}>
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
      {modalIsOpen &&
        createPortal(
          <dialog open={modalIsOpen}>
            <div>
              <button onClick={() => setModalIsOpen(false)}>x</button>
              <h1>{player.name}</h1>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const character = event.target.character.value;
                  const isDrunk = event.target.drunk.checked;
                  const isDead = event.target.dead.checked;
                  const isPoisoned = event.target.poisoned.checked;

                  updatePlayer({ ...player, character, isDead, isDrunk, isPoisoned });
                  setModalIsOpen(false);
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
