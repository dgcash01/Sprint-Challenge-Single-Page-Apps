import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav-list">
            <div>
                <div className="home-button">
                    <Link to={`/`} className='navLinks'><span className='homeBtnText'>Home</span> <img className = 'homeNavImg' src= 'https://vignette.wikia.nocookie.net/rickandmorty/images/b/ba/The_Smith_Residence.jpg/revision/latest?cb=20151015031818'/></Link>
                    <Link to={`/Search`} className='navLinks'><span className='homeBtnText'>Search</span> <img className = 'homeNavImg' src= 'https://www.indiewire.com/wp-content/uploads/2019/11/Rick-and-Morty-Season-4-Episode-2.jpg?w=780'/> </Link>
                    <Link to={`/CharacterList`} className='navLinks'><span className='homeBtnText'>Character</span> <img className = 'homeNavImg' src= 'https://vignette.wikia.nocookie.net/rickandmorty/images/4/49/Total_Rickall.png/revision/latest?cb=20160920093829'/></Link>
                </div>
                <div className="search-button">
                </div>
                <div className="characterlist-button">
                </div>
            </div>
        </div>
    );
}