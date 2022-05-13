import Head from "next/head";
import CoverImage from "../components/CoverImage";
import LoginForm from "../components/LoginForm";
import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter</title>
        <link rel='icon' href='https://abs.twimg.com/favicons/twitter.2.ico' />
      </Head>
      <LoginForm />
      <CoverImage />
    </div>
  );
};

export default Login;
