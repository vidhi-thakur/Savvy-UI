import React from 'react';
import './HorizontalCard.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'

function HorizontalCard({heading, subHeading}) {
    return <div className='horizontalCard'>
        <header>
            <aside>
                <img width={"100%"} height={'100%'} alt="cardImage" srcSet="https://picsum.photos/100/60 1x, https://picsum.photos/70/30 2x" />
            </aside>
            <section>
                <h1 className='heading'>{heading}</h1>
                <h2 className='subHeading'>{subHeading}</h2>
            </section></header>
        <footer className='cardBtn'>
            <section>
                <button>ACTION 1</button>
                <button>ACTION 2</button>
            </section>
            <section>
                <AiOutlineHeart className='icon' />
                <AiOutlineShareAlt className='icon' />
                <BsThreeDotsVertical className='icon' />
            </section>
        </footer>
    </div>;
}

export default HorizontalCard;
