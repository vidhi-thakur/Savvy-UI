import React from 'react';
import "./TextCard.css"

function TextCard({ heading, subHeading, content, ...rest }) {
  return <div className='textCard'>
    <header>
      <h1 className='heading'>{heading}</h1>
      <h2 className='subHeading'>{subHeading}</h2>
    </header>
    <section className='cardContent'>
      <p>{content}</p>
    </section>
    <footer className='cardBtn'>
      {rest.btn}
    </footer>
  </div>;
}

export default TextCard;
