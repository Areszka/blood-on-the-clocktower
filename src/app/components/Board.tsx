"use client";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
import Player from "./Player";
import styles from "./Board.module.css";
import ShuffleButton from "./ShuffleButton";

export type Player = {
  name: string;
  character: string;
  states: string[];
};

export default function Board({
  data,
  setData,
}: {
  data: Array<Player>;
  setData: Dispatch<SetStateAction<Player[]>>;
}) {
  const [newPlayer, setNewPlayer] = React.useState("");
  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <form
          className={styles.addPlayer}
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!data.find((pl) => pl.name === newPlayer)) {
              setData([...data, { name: newPlayer, character: "none", states: [] }]);
            }
            setNewPlayer("");
          }}
        >
          <label>
            <input
              required
              minLength={3}
              value={newPlayer}
              onChange={(event) => setNewPlayer(event.target.value)}
              placeholder="Filip..."
            />
          </label>
          <button type="submit">+</button>
        </form>
        <ShuffleButton
          updatePlayers={(characters: string[]) => {
            const newData = structuredClone(data).map((pl, index) => {
              return {
                ...pl,
                character: characters[index] ?? "none",
                states: [],
              };
            });

            setData(newData);
          }}
        />
      </div>
      <div className={styles.board}>
        {data.map((player) => {
          return (
            <Player
              key={player.name}
              player={player}
              updatePlayer={(updatedPlayer) => {
                const newData = structuredClone(data);
                const indexOfPlayer = newData.findIndex((p) => p.name === player.name);
                newData[indexOfPlayer] = updatedPlayer;
                setData(newData);
              }}
              removeState={(state) => {
                const newData = structuredClone(data);
                const indexOfPlayer = newData.findIndex((p) => p.name === player.name);
                if (newData[indexOfPlayer].states.includes(state)) {
                  newData[indexOfPlayer].states = newData[indexOfPlayer].states.filter(
                    (s) => s !== state
                  );
                } else {
                  newData[indexOfPlayer].states = [...newData[indexOfPlayer].states, state];
                }
                setData(newData);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
