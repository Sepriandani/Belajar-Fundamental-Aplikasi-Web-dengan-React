import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteInput({ title, onTitleChange, onBodyInput }) {
  const { selectLanguage } = useContext(LocaleContext);
  return (
    <div className="add-new-page__input">
      <input
        type="text"
        className="add-new-page__input__title"
        placeholder={selectLanguage({
          id: "Catatan Rahasia",
          en: "Secret note",
        })}
        value={title}
        onChange={onTitleChange}
      />
      <div
        className="add-new-page__input__body"
        data-placeholder={selectLanguage({
          id: "Sebenarnya saya adalah ....",
          en: "Actually, I am ...",
        })}
        contentEditable
        onInput={onBodyInput}
      ></div>
    </div>
  );
}

NoteInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
};

export default NoteInput;
