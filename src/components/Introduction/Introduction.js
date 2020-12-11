import React, { useState } from 'react';
import './Introduction.css';
import tunisImg from '../../assets/tunisonthemap.png';
import yasmineImg from '../../assets/yasmine.png';

function Introduction() {
 const [tunis, setTunis] = useState(false);
 const [yas, setYas] = useState(false);

 function onTunisChange() {
  setTunis((prevState) => !prevState);
 }

 function onYasChange() {
  setYas((prevState) => !prevState);
 }

 return (
  <div className="wrapper">
   <div>
    <span className="bold">Hello,</span> Welcome to my portfolio!
   </div>
   <div className="intro">
    My name is <span 
     className="bold" 
     onMouseEnter={onYasChange} 
     onMouseLeave={onYasChange}
     >
      Yasmine
      {yas && <img src={yasmineImg} alt="yasmine" className="yasmine" />}
     </span> and 
    I was born in <span 
    className="underline" 
    onMouseEnter={onTunisChange} 
    onMouseLeave={onTunisChange}>
     Tunis
    {tunis && <img src={tunisImg} alt="Tunis on a map" className="tunis" />}
    </span> in 1995.
    I am a <span className="bold">creative</span> <span className="spacing">junior</span> Fullstack Web Developer.
    Currently in Budapest.
   </div>
   <div>
    Given my scientific background and my passion for visual and fine arts, 
    I thrive on building applications that are both <span className="spacing">functional</span> and <span className="bold spacing">beautiful</span>. 
   </div>
   <div>
    <span className="underline">Take a look →</span>
   </div>
  </div>
 )
}

export default Introduction;