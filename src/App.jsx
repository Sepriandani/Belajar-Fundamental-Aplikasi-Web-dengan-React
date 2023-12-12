import React, { useEffect, useMemo, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ArchivesPage from "./pages/ArchivesPage";
import Navigation from "./components/Navigation";
import AddNotePageWrapper from "./pages/AddNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPages";
import ToggleLocale from "./components/ToggleLocale";
import ToggleTheme from "./components/ToggleTheme";
import ButtonLogout from "./components/ButtonLogout";
import HomePage from "./pages/HomePage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import DetailPage from "./pages/DetailPage";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const selectLanguage = ({ id, en }) => {
    return locale === "id" ? id : en;
  };

  const localContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
      selectLanguage,
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">
                  {selectLanguage({ id: "Aplikasi Catatan", en: "Notes App" })}
                </Link>
              </h1>
              <ToggleLocale />
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={localContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">
                {selectLanguage({ id: "Aplikasi Catatan", en: "Notes App" })}
              </Link>
            </h1>
            <Navigation />
            <ToggleLocale />
            <ToggleTheme />
            <ButtonLogout logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/notes/new" element={<AddNotePageWrapper />} />
              <Route path="/archives" element={<ArchivesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
