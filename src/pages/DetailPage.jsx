import React from "react";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import ActionButton from "../components/ActionButton";
import { BiArchiveIn, BiArchiveOut, BiTrash } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function archiveNoteHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  function deleteNoteHandler(id, archived) {
    deleteNote(id);
    archived ? navigate("/archives") : navigate("/");
  }

  function unArchiveNoteHandler(id) {
    unarchiveNote(id);
    navigate("/");
  }

  return (
    <DetailPage
      id={id}
      archiveNoteHandler={archiveNoteHandler}
      deleteNoteHandler={deleteNoteHandler}
      unArchiveNoteHandler={unArchiveNoteHandler}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onClickArchiveButtonHandler =
      this.onClickArchiveButtonHandler.bind(this);
    this.onClickDeleteButtonHandler =
      this.onClickDeleteButtonHandler.bind(this);
    this.onClickActiveButtonHandler =
      this.onClickActiveButtonHandler.bind(this);
  }

  onClickArchiveButtonHandler() {
    this.props.archiveNoteHandler(this.props.id);
  }

  onClickDeleteButtonHandler() {
    this.props.deleteNoteHandler(this.props.id, this.state.note.archived);
  }

  onClickActiveButtonHandler() {
    this.props.unArchiveNoteHandler(this.props.id);
  }

  render() {
    return (
      <section className="detail-page">
        <NoteDetail {...this.state.note} />
        <div className="detail-page__action">
          {this.state.note.archived ? (
            <ActionButton
              title="Aktifkan"
              icon={<BiArchiveOut />}
              onClick={this.onClickActiveButtonHandler}
            />
          ) : (
            <ActionButton
              title="Arsipkan"
              icon={<BiArchiveIn />}
              onClick={this.onClickArchiveButtonHandler}
            />
          )}
          <ActionButton
            title="Hapus"
            icon={<BiTrash />}
            onClick={this.onClickDeleteButtonHandler}
          />
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  unArchiveNoteHandler: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
