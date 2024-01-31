import { TemplateListing } from "./components/TemplateListing";
import { TemplateListingResponse } from "./types/templateListingResponse";

import { headers } from "next/headers";

import styles from "./page.module.css";

async function getData() {
  const headersList = headers();

  const domain = headersList.get("host");
  const res = await fetch(`http://${domain}/api/templates`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = (await getData()) as TemplateListingResponse;
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
            <TemplateListing data={data.templates} />
          </div>
        </main>
      </div>
    </div>
  );
}
