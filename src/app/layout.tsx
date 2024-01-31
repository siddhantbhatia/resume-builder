import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "An app to build resumer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Resume Builder</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
