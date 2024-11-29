import React, { useState } from "react";


const Stats = ({stats}) => {

  const {
    wordCount,
    numberOfCharacter,
    instagramCharLeft,
    fakebookCharLeft,
  } = stats;

  return (
    <section className="stats">
      <Stat number = {wordCount} label="Words"/>
      <Stat number = {numberOfCharacter} label="Characters"/>
      <Stat number = {instagramCharLeft} label="Instagram"/>
      <Stat number = {fakebookCharLeft} label="Fakebook"/>
    </section>
  ); 
};
function Stat({ number, label }) {
  return(
    <section className="stat">
      <span className={ `${number<0 ? 'stat_number_limit' : 'stat_number'}` }> {number} </span>
      <h2 className="second_heading">{label}</h2>
    </section>
  );
}


export default Stats;
