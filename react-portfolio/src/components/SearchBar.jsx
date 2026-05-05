import React from "react";

const SearchBar = ({value, onChange }) => {
    return(
        <div>
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input type="text" Placeholder="Search Projects" value={value} onChange={(e) => onChange(e.target.value)} />
            {value && (<button className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search">
              x  
            </button>)}
        </div>
    );
}
export default SearchBar;
