import React from "react";
import PropTypes from "prop-types";

function NoteInput({ state, onTitleChange, onBodyInput }) {
    return(
        <div className="add-new-page__input">
            <input 
                type="text" 
                className="add-new-page__input__title" 
                placeholder="Catatan Rahasia" 
                value={state.title}
                onChange={onTitleChange}
            />
            <div 
                className="add-new-page__input__body" 
                data-placeholder="Sebenarnya saya adalah ...."
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
}

export default NoteInput;