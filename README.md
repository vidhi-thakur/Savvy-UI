# Savvy-UI

It is a _simple and sophisticated_ component library curated for minimalistic UI needs.

## Cards
### Basic card
![image](https://user-images.githubusercontent.com/72219676/150677872-643f8129-2830-4f07-a671-707c9ba61603.png)

Basic savvy card with heaading, subheading, content, and link (or a button) to give user bacic information. 

```
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
```

and pass the props as
```
<TextCard
        heading="This is card heading"
        subHeading="This is card subheading"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btn={<button>LINK</button>}
      />
```

css for the card

``` 
.textCard {
  box-shadow: var(--shadow-default);
  width: var(--default-card-width);
  outline: none;
  border-radius: var(--border-radius);
}

.heading {
  font-size: var(--heading-default);
  font-weight: 500;
  padding: 1rem 1rem 0rem;
}

.subHeading {
  color: rgba(0, 0, 0, 0.54);
  font-size: var(--sabHeading-default);
  margin-top: 0.375rem;
  padding: 0rem 1rem;
}

.cardContent {
  margin: 1rem 0rem;
  text-align: justify;
  cursor: pointer;
  padding: 1rem;
}

.cardContent:hover {
  background-color: var(--card-hover);
}

.cardBtn {
  margin: 1rem;
}
```

### Card with image
![image](https://user-images.githubusercontent.com/72219676/150684457-a5525a06-15e8-4a61-854a-9163ebeeb57c.png) ![image](https://user-images.githubusercontent.com/72219676/150684489-aebb3ff7-77ea-40e8-967e-5af3206be67c.png)


The card with image, as shown in the images above has an option of adding a header to it. It has an image, card text and a button. 

```
function ImageCard({ heading, subHeading, content, ...rest }) {
    return <div className='imageCard'>
        {heading && <header>
            <h1 className='heading'>{heading}</h1>
            <h2 className='subHeading'>{subHeading}</h2>
        </header>}
        <section className='cardContent'>
            <section>
                <img className={!heading && "curvedCardImg"} width={"100%"} height='auto' alt="card-image" srcSet="https://picsum.photos/400/200 1x, https://picsum.photos/400/200 2x" />
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
```
as props, if heading is not passed, the card does not render the header.

```
<ImageCard
        heading="This is card heading"
        subHeading="This is card subheading"
        content="Lorem Ipsum is simply dummy lorem ipsum has been the industry's standard dummy text text of the printing and typesetting industry."
        btn={<button>LINK</button>}
      />
```


css for the card
```
.imageCard {
  box-shadow: var(--shadow-default);
  width: var(--default-card-width);
  outline: none;
  border-radius: var(--border-radius);
}

.heading {
  font-size: var(--heading-default);
  font-weight: 500;
  padding: 1rem 1rem 0rem;
}

.subHeading {
  color: rgba(0, 0, 0, 0.54);
  font-size: var(--sabHeading-default);
  margin-top: 0.375rem;
  padding: 0rem 1rem 1rem;
}

.curvedCardImg {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.cardContent {
  cursor: pointer;
}

.cardContent:hover {
  background-color: var(--card-hover);
}

.imageCard-text {
  padding: 1rem;
  text-align: justify;
}

.cardBtn {
  margin: 1rem;
}
```

### Card with buttons and icons
![image](https://user-images.githubusercontent.com/72219676/150862160-562bd67d-d471-497c-97f0-16b0c08cf855.png)

The card with image, header, buttons and icons.

```
<div className='iconBtnCard'>
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
```
    
    css for this card
```
    .iconBtnCard {
    box-shadow: var(--shadow-default);
    width: var(--default-card-width);
    outline: none;
    border-radius: var(--border-radius);
    background-color: #fff;
  }
  
  .heading {
    font-size: var(--heading-default);
    font-weight: 500;
    padding: 1rem 1rem 0rem;
  }
  
  .subHeading {
    color: rgba(0, 0, 0, 0.54);
    font-size: var(--sabHeading-default);
    margin-top: 0.375rem;
    padding: 0rem 1rem 1rem;
  }
  
  .curvedCardImg {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  
  .cardContent {
    cursor: pointer;
  }
  
  .cardContent:hover {
    background-color: var(--card-hover);
  }
  
  .imageCard-text {
    padding: 1rem;
    text-align: justify;
  }

  .cardBtn section {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .cardBtn {
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 50%;
  }

  .icon:hover {
    background-color: var(--card-hover);
  }
  ```

### Horizontal card
![image](https://user-images.githubusercontent.com/72219676/150875103-bc973ae1-9561-44d9-9b5c-fc020983c122.png)

Horizontal card with image, title, subtitle, buttons and icons

```
<div className='horizontalCard'>
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
    </div>
```
    css for the card
```
    .horizontalCard {
  box-shadow: var(--shadow-default);
  width: var(--default-card-width);
  outline: none;
  border-radius: var(--border-radius);
  background-color: #fff;
}

.horizontalCard {
  display: flex;
  flex-direction: column;
}

aside {
  flex-basis: 35%;
  flex-grow: 1;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

header section {
  flex-grow: 1;
}

img {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.cardBtn section {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.cardBtn {
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header {
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

header:hover {
  background-color: var(--card-hover);
}

.heading {
  font-size: var(--heading-default);
  font-weight: 500;
  padding: 1rem 1rem 0rem;
}

.subHeading {
  color: rgba(0, 0, 0, 0.54);
  font-size: var(--sabHeading-default);
  margin-top: 0.375rem;
  padding: 0rem 1rem 1rem;
}

.icon {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
}

.icon:hover {
  background-color: var(--card-hover);
  color: var(--primary-color-text);
}
```
