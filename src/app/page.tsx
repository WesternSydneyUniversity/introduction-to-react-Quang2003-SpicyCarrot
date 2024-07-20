import styles from "./index.module.css";
import CreateList from "../components/CreateList";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get Things Done</h1>
        <CreateList />
      </div>
    </main>
  );
}

// Finished Assignment 1
