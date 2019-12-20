import React, { useState, useEffect } from "react";

const CharacterCard = (props) => {
    const [additionalClasses, setAdditionalClasses] = useState();
    if (additionalClasses === undefined) {
        setAdditionalClasses('characterCard');
    }
    function cardClick() {
        setAdditionalClasses('characterCard inDeck');
    };
    return (
        // <div className = {['characterCard', additionalClasses]}>
        <div className={additionalClasses} onClick={e => {
            cardClick(e);
            console.log('ive been clicked');
            console.log(e);
        }}>
            <div className='frontFace'>
                <div className='charName'>{props.myCharacter.name}</div>
                <div className='gender'>{props.myCharacter.gender}</div>
                <div className='status'>{props.myCharacter.status}</div>
                <div className='species'>{props.myCharacter.species}</div>
                <div className='characterImgBox'>
                  <img src={props.myCharacter.image} />
                </div>

            </div>
            <div className='backFace'>

            </div>
        </div>
    );
};
export default CharacterCard; 
