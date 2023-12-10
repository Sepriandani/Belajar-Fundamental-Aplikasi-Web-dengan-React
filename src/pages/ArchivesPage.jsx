import React from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getArchivedNotes } from "../utils/local-data";
import ListEmpty from "../components/ListEmpty";

class ArchivesPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || "",
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return{
                keyword
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {

        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));

        return(
            <section className="archives-page">
                <h2>Catatan Arsip</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {
                    notes.length > 0 ? <NotesList notes={notes} /> : <ListEmpty />
                }
            </section>
        );
    }
}

export default ArchivesPage;