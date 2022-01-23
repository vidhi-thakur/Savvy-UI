import React from 'react';
import './IconBtnCard.css'

function IconBtnCard() {
    return <div className='iconBtnCard'>
        {heading && <header>
            <h1 className='heading'>{heading}</h1>
            <h2 className='subHeading'>{subHeading}</h2>
        </header>}
        <section className='cardContent'>
            <section>
                <img className={!heading && "curvedCardImg"} width={"100%"} height='auto' alt="cardImage" srcSet="https://picsum.photos/400/200 1x, https://picsum.photos/400/200 2x" />
            </section>
            <section className='imageCard-text'>
                <p>{content}</p>
            </section>
        </section>
        <footer className='cardBtn'>
            {rest.btn}
        </footer>
    </div>;
}

export default IconBtnCard;
