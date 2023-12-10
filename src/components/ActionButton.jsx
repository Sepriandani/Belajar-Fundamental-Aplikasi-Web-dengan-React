import React from "react";

function ActionButton({ title, icon, onClick }) {
    return(
        <button 
        className="action" 
        type="button" 
        title={title}
        onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default ActionButton;