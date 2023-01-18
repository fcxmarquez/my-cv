import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Francisco Marquez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <iframe
          src="https://drive.google.com/file/d/126dfJVNgIAlVknt6cS-JZs0W7HYnUw07/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          style={{ position: 'absolute' }}
        />
      </main>
    </>
  );
}
