import React, { useContext } from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { selectLanguage } = useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error, message } = await register(user);

    if (!error) {
      alert("Selamat anda sudah terdaftar, silahkan login dulu ya");
      navigate("/");
    }
  }
  return (
    <section className="register-page">
      <h2>
        {selectLanguage({
          id: "Input form untuk daftar akun",
          en: "Fill the form to register account.",
        })}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {selectLanguage({
          id: "Sudah punya akun ?",
          en: "Already have an account?",
        })}
        <Link to="/">
          {selectLanguage({ id: "Login di sini", en: "Login here" })}
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
