import React from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data";
import ActionButton from "../components/ActionButton";
import { BiPlus } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
import ListEmpty from "../components/ListEmpty";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  function addButtonHandler() {
    navigate("/notes/new");
  }

  return (
    <HomePage
      onAddButtonHandler={addButtonHandler}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase()),
    );

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {notes.length > 0 ? <NotesList notes={notes} /> : <ListEmpty />}
        <div className="homepage__action">
          <ActionButton
            title="Tambah"
            icon={<BiPlus />}
            onClick={this.props.onAddButtonHandler}
          />
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  onAddButtonHandler: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
