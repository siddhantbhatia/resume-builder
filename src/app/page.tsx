import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.app_container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/template">Template</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          <div className={styles.container}>
            <div>Create new template</div>
            <div>Other template</div>
          </div>
        </main>
      </div>
    </div>
  );
}
