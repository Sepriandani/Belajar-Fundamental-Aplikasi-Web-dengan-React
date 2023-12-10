import React from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data";
import ActionButton from "../components/ActionButton";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function HomePageWrapper() {

    const navigate = useNavigate();

    function addButtonHandler() {
        navigate("/notes/new");
    }
    
    return(
        <HomePage onAddButtonHandler={addButtonHandler} />
    );
}

class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notes: getActiveNotes(),
        }
    }

    render(){
        return(
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar />
                <NotesList notes={this.state.notes} />
                <div className="homepage__action">
                    <ActionButton title="Tambah" icon={<BiPlus />} onClick={this.props.onAddButtonHandler} />
                </div>
            </section>
        );
    }
}

export default HomePageWrapper;