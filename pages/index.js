import Head from "next/head";
import { getSession, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import styles from "../styles/home.module.css";
import { createContext } from "react";
export const UserContext = createContext();
export default function Home({ user }) {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Anasayfa / Twitter</title>
        <link rel='icon' href='https://abs.twimg.com/favicons/twitter.2.ico' />
      </Head>
      <UserContext.Provider value={user}>
        <Nav />
        <Main />
        <Sidebar />
      </UserContext.Provider>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
