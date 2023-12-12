import React, { useState } from "react";
import NoteInput from "../components/NoteInput";
import ActionButton from "../components/ActionButton";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { addNote } from "../utils/network-data";

function AddNotePage() {
  const navigate = useNavigate();
  const [title, onTitleChangeHandler] = useInput("");
  const [body, setBody] = useState("");

  function onBodyInputHandler(event) {
    setBody(event.target.innerHTML);
  }

  async function onSaveButtonHandler() {
    await addNote({ title, body });
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <NoteInput
        title={title}
        onTitleChange={onTitleChangeHandler}
        onBodyInput={onBodyInputHandler}
      />
      <div className="add-new-page__action">
        <ActionButton
          title="Simpan"
          icon={<BiCheck />}
          onClick={onSaveButtonHandler}
        />
      </div>
    </section>
  );
}

export default AddNotePage;
