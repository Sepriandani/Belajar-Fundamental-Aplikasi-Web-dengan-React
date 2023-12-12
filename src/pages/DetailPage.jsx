import React, { useContext, useEffect, useState } from "react";
import NoteDetail from "../components/NoteDetail";
import ActionButton from "../components/ActionButton";
import { BiArchiveIn, BiArchiveOut, BiTrash } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import Loading from "../components/Loading";

function DetailPage() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  async function deleteNoteHandler() {
    await deleteNote(id);
    note.archived ? navigate("/archives") : navigate("/");
  }

  async function archiveNoteHandler() {
    await archiveNote(id);
    navigate("/");
  }

  async function unArchiveNoteHandler() {
    await unarchiveNote(id);
    navigate("/archives");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="detail-page">
      <NoteDetail {...note} />
      <div className="detail-page__action">
        {note.archived ? (
          <ActionButton
            title="Aktifkan"
            icon={<BiArchiveOut />}
            onClick={unArchiveNoteHandler}
          />
        ) : (
          <ActionButton
            title="Arsipkan"
            icon={<BiArchiveIn />}
            onClick={archiveNoteHandler}
          />
        )}
        <ActionButton
          title="Hapus"
          icon={<BiTrash />}
          onClick={deleteNoteHandler}
        />
      </div>
    </section>
  );
}

export default DetailPage;
