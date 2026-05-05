import React from "react";

function SearchBar ({value, onChange }) {
    return(
        <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input className="search-input" type="text" placeholder="Search Projects" value={value} onChange={(e) => onChange(e.target.value)} />
            {value && (<button className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search">
              x  
            </button>)}
        </div>
    );
}
export default SearchBar;
