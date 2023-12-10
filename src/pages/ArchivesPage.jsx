import React from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getArchivedNotes } from "../utils/local-data";

class ArchivesPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        }
    }

    render() {
        return(
            <section className="archives-page">
                <h2>Catatan Arsip</h2>
                <SearchBar />
                <NotesList notes={this.state.notes} />
            </section>
        );
    }
}

export default ArchivesPage;