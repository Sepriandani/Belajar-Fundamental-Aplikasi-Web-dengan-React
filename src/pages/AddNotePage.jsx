import React from "react";
import NoteInput from "../components/NoteInput";
import ActionButton from "../components/ActionButton";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import PropTypes from "prop-types";

function AddNotePageWrapper() {
  const navigate = useNavigate();

  function saveNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return <AddNotePage saveNoteHandler={saveNoteHandler} />;
}

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onClickSaveButtonHandler = this.onClickSaveButtonHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onClickSaveButtonHandler() {
    this.props.saveNoteHandler(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <NoteInput
          state={this.state}
          onTitleChange={this.onTitleChangeHandler}
          onBodyInput={this.onBodyInputHandler}
        />
        <div className="add-new-page__action">
          <ActionButton
            title="Simpan"
            icon={<BiCheck />}
            onClick={this.onClickSaveButtonHandler}
          />
        </div>
      </section>
    );
  }
}

AddNotePage.propTypes = {
  saveNoteHandler: PropTypes.func.isRequired,
};

export default AddNotePageWrapper;
