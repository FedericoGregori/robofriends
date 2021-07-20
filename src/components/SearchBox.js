import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <input
            className="db center pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots"
            onChange={searchChange}
        />
    )
}

export default SearchBox;