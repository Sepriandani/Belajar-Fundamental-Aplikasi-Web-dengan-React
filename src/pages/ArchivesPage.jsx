import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import ListEmpty from "../components/ListEmpty";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";

function ArchivesPage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { selectLanguage } = useContext(LocaleContext);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter(({ title }) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archive-page">
      <h2>{selectLanguage({ id: "Catatan Arsip", en: "Archived Note" })}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? (
        <Loading />
      ) : filteredNotes.length > 0 ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <ListEmpty />
      )}
    </section>
  );
}

export default ArchivesPage;
