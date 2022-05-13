/* eslint-disable react/no-unescaped-entities */
import GoogleLogo from "../../assets/icons/GoogleLogo";
import TwitterLogo from "../../assets/icons/TwitterLogo";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";

const LoginForm = () => {
  return (
    <div className={styles.login}>
      <TwitterLogo w='45' />
      <h1>Şu anda olup bitenler</h1>
      <h3>Twitter'a bugün katıl.</h3>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        <GoogleLogo />
        Google ile giriş yapın
      </button>
    </div>
  );
};
export default LoginForm;
