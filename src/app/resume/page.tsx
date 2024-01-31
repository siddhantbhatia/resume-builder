import { ResumeListing } from "@app/components/ResumeListing";
import { ResumeListingResponse } from "@app/types/resumeListingResponse";

import styles from "./page.module.css";

async function getData() {
  const res = await fetch(`http://${process.env.domain}/api/resumes`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Resume() {
  const data = (await getData()) as ResumeListingResponse;

  return (
    <div>
      <div className={styles.app_container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/">Template</a>
            </li>
            <li>
              <a href="/resume">Resumes</a>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          <div className={styles.container}>
            <ResumeListing data={data.resumes} />
          </div>
        </main>
      </div>
    </div>
  );
}
