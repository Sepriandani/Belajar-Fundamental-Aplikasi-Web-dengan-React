import React, { useContext } from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  const { selectLanguage } = useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {selectLanguage({
          id: "Yuk, login untuk menggunakan aplikasi",
          en: "Login to use app, please.",
        })}{" "}
      </h2>
      <LoginInput login={onLogin} />
      <p>
        {selectLanguage({
          id: "Belum punya akun ?",
          en: "Don't have an account?",
        })}
        <Link to="/register">
          {selectLanguage({ id: "Daftar di sini", en: "Register here" })}{" "}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
