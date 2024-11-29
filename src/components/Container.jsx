import React, { useState } from 'react'
import TextArea from './TextArea'
import Stats from './Stats'

const Container = () => {
  const [text, setText] = useState("");
  
  const numberOfCharacter= text.length;
  const instagramCharLeft= 200-numberOfCharacter;
  const fakebookCharLeft= 2200-numberOfCharacter;

  //number of words
  const wordArray=text.trim().split(" ");

  const filteredWords= wordArray.filter((item) => item !="");

  const wordCount = filteredWords.length;



  const stats={
    numberOfCharacter: numberOfCharacter,  //can also be written as below because of same name
    instagramCharLeft,
    fakebookCharLeft,
    wordCount,
  }

  return (
    <main className='container'>
      <TextArea text={text} setText={setText}/>
      <Stats stats={stats}/>
    </main>
  )
}

export default Container
