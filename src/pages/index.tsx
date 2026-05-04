import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Student Profile - Arka</title>
        <meta name="description" content="Student profile showcasing personal information, tech interests, and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1>Arka&apos;s Student Profile</h1>
            <div className={styles.profile}>
              <h2>Personal Information</h2>
              <p><strong>Name:</strong> Febrian Arka Samudra</p>
              <p><strong>Student ID:</strong> 2341720066</p>
              
              <h2>Portfolio</h2>
              <p>Check out my <a href="https://github.com/FebrianArkaSamudra" target="_blank" rel="noopener noreferrer">GitHub</a> for more projects and contributions.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
