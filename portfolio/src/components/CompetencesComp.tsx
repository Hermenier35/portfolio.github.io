import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
const words = [
  {
    text: 'Java',
    value: 64,
  },
  {
    text: 'Why3',
    value: 64,
  },
  {
    text: 'Isabelle/HOL',
    value: 64,
  },
  {
    text: 'C',
    value: 64,
  },
  {
    text: 'SCALA',
    value: 64,
  },
  {
    text: 'SQL',
    value: 64,
  },
  {
    text: 'JS',
    value: 64,
  },
  {
    text: 'PYTHON',
    value: 64,
  },
  {
    text: 'HTML',
    value: 64,
  },
  {
    text: 'Node',
    value: 64,
  },
  {
    text: 'Vue',
    value: 64,
  },
  {
    text: 'React',
    value: 64,
  },
  {
    text: 'Angular',
    value: 64,
  },
  {
    text: 'CodeBlocks',
    value: 64,
  },
  {
    text: 'Eclipse',
    value: 64,
  },
  {
    text: 'MySQL',
    value: 64,
  },
  {
    text: 'IntelliJ',
    value: 64,
  },
  {
    text: 'WampServer',
    value: 64,
  },
  {
    text: 'C++',
    value: 64,
  }
]

function SimpleWordcloud() {
  return <ReactWordcloud 
            words={words}
          />
}
export default SimpleWordcloud;
