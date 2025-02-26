"use client";
import styles from "./page.module.css";
import Board, { Player } from "./components/Board";
import Characters from "./components/Characters";
import React from "react";

export default function Home() {
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
    <div className={styles.page}>
      <main className={styles.main}>
        <Board data={data} setData={setData} />
      </main>
      <Characters data={data} />
    </div>
  );
}
