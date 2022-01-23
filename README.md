# Savvy-UI

It is a _simple and sophisticated_ component library curated for minimalistic UI needs.

## Cards
#### Basic card
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
  width: min(300px, 90%);
  outline: none;
  border-radius: var(--border-radius);
  padding: 1rem;
}

.heading {
  font-size: var(--heading-default);
  font-weight: 500;
}

.subHeading {
  color: rgba(0, 0, 0, 0.54);
  font-size: var(--sabHeading-default);
  margin-top: 0.375rem;
}

.cardContent {
  margin-top: 1rem;
  text-align: justify;
}

.cardBtn {
  margin-top: 1rem;
}
```
