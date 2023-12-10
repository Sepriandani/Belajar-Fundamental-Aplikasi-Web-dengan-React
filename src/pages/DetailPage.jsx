import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import ActionButton from "../components/ActionButton";
import {BiArchiveIn, BiTrash} from "react-icons/bi";
import { useParams } from "react-router-dom";

function DetailPageWrapper() {
    const { id } = useParams();

    return(
        <DetailPage id={id} />
    );
}

class DetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id),
        }
    }

    render() {
        return(
            <section className="detail-page">
                <NoteDetail {...this.state.note} />
                <div className="detail-page__action">
                    <ActionButton title="Arsipkan" icon={<BiArchiveIn />} />
                    <ActionButton title="Hapus" icon={<BiTrash />} />
                </div>
            </section>
        );
    }
}

export default DetailPageWrapper;