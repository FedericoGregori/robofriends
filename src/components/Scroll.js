import React from "react";

const Scroll = ({ children }) => {
    return (
        <div style={{ height: "70vh", border: '1px solid black', overflowY: "scroll" }}>{children}</div>
    );
};

export default Scroll;
