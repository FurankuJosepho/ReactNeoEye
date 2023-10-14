import React from 'react'
import { Neoeye } from '../component/neoeye'
import { Neo } from '../component/neo'
import { Neoexperts } from '../component/neoexperts'
import expert from '../json/expert.json'

export const About = () => {
  return (
    <>
      <div className="about-container">
        <Neoeye />
      </div>
      <div className="why-container">
        <Neo />
      </div>
      <div className="expert-container">
        <Neoexperts expert={expert} />
      </div>
    </>
  );
}
