import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function CharacterList() {
  const [swData, setSwData] = useState();
  function getTheData (pageNumber){
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(resp => {
        setSwData(resp.data);
        // console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });      
  }
  useEffect(() => {
      setSwData(getTheData(1));
  }, []);

  if (swData === undefined) {
      return <></>
  }
  // console.log('in here');
  console.log(swData);
  return (
      <section className = 'CharacterList'>
          {
              swData.results.map(e => (<CharacterCard myCharacter = {e} />))
          }
      </section>
  );
};
