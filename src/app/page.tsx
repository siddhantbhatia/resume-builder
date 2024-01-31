import { useRouter } from "next/navigation";

import styles from "./page.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QuickActionMenu from "./components/QuickActionMenu/QuickActionMenu";
import { redirect } from "next/navigation";
import { TemplateListing } from "./components/TemplateListing";
import { TemplateListingData } from "./components/TemplateListing/types";
import { TemplateListingResponse } from "./types/templateListingResponse";

async function getData() {
  const res = await fetch(`http://localhost:5001/api/templates`);

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
