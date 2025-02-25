"use client";
import React from "react";
import Player from "./Player";
import styles from "./Board.module.css";

export type Player = {
  name: string;
  character: string;
  isDead: boolean;
  isPoisoned: boolean;
  isDrunk: boolean;
};

export default function Board() {
  const [data, setData] = React.useState<Array<Player>>([]);

  React.useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.name.value;
          setData([
            ...data,
            { name, character: "none", isDead: false, isDrunk: false, isPoisoned: false },
          ]);
        }}
      >
        <label>
          Name:
          <input required minLength={3} id="name" />
        </label>
        <button>Add</button>
      </form>
      <div className={styles.board}>
        {data.map((player, index) => {
          return (
            <Player
              key={player.name}
              player={player}
              deg={(index * 360) / data.length}
              updatePlayer={(updatedPlayer) => {
                const newData = structuredClone(data);
                const indexOfPlayer = newData.findIndex((p) => p.name === player.name);
                newData[indexOfPlayer] = updatedPlayer;
                setData(newData);
              }}
              removeState={(state) => {
                const newData = structuredClone(data);
                const indexOfPlayer = newData.findIndex((p) => p.name === player.name);
                if (state === "Dead") {
                  newData[indexOfPlayer].isDead = false;
                }
                if (state === "Poisoned") {
                  newData[indexOfPlayer].isPoisoned = false;
                }
                if (state === "Drunk") {
                  newData[indexOfPlayer].isDrunk = false;
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
