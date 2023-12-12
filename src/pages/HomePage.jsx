import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import ActionButton from "../components/ActionButton";
import { BiPlus } from "react-icons/bi";
import ListEmpty from "../components/ListEmpty";
import { getActiveNotes } from "../utils/network-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { selectLanguage } = useContext(LocaleContext);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setTimeout(() => setLoading(false), 500);
    });
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter(({ title }) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  });

  function onAddButtonHandler() {
    navigate("/notes/new");
  }

  return (
    <section className="homepage">
      <h2>{selectLanguage({ id: "Catatan Aktif", en: "Active Note" })}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />

      {loading ? (
        <Loading />
      ) : filteredNotes.length > 0 ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <ListEmpty />
      )}
      <div className="homepage__action">
        <ActionButton
          title="Tambah"
          icon={<BiPlus />}
          onClick={onAddButtonHandler}
        />
      </div>
    </section>
  );
}

export default HomePage;
