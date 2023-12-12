import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function ListEmpty() {
  const { selectLanguage } = useContext(LocaleContext);

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">
        {selectLanguage({ id: "Tidak ada catatan", en: "No notes" })}
      </p>
    </section>
  );
}

export default ListEmpty;
