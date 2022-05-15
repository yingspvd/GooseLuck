import Head from "next/head";
import styles from "@styles/Home.module.css";
import { useRouter } from "next/router";
import useAccount from "@hooks/useAccount";
import { useEffect } from "react";

const Home = () => {
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    router.push("/buyTicket");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This is my DApp" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to DApp</h1>
        <h3> Your account: {account}</h3>
      </main>
    </div>
  );
};

export default Home;
