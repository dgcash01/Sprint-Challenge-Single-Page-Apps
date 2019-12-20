import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav-list">
            <div>
                <div className="home-button">
                    <Link to={`/`}>Home</Link>
                </div>
                <div className="search-button">
                    <Link to={`/Search`}>Search</Link>
                </div>
                <div className="characterlist-button">
                    <Link to={`/CharacterList`}>Character List</Link>
                </div>
            </div>
        </div>
    );
}