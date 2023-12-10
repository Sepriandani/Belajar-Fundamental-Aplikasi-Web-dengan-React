import React from "react";

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
                className="add-new-page__input_body" 
                contentEditable="true" 
                data-placeholder="Sebenarnya saya adalah ...."
                onInput={onBodyInput}
            ></div>
        </div>
    );
}

export default NoteInput;