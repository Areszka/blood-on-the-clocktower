import styles from "./page.module.css";
import { CHARACTERS } from "@/data/trouble-brewing";
import CharacterItem from "./components/CharacterItem";
import Board from "./components/Board";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Board />
      </main>
      <div className={styles.side}>
        <ul>
          {CHARACTERS.map((character) => {
            return (
              <CharacterItem name={character.name} power={character.power} key={character.name} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
