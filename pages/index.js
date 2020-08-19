import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import MainData from "../components/MainData";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Searchbar />
      </header>
      <main>
        <Sidebar />
        <MainData />
      </main>
    </div>
  );
}
