import './App.css';
import TextCard from './components/cards/textCard/TextCard';

function App() {
  return (
    <div className="App">
      <TextCard
        heading="This is card heading"
        subHeading="This is card subheading"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btn={<button>LINK</button>}
      />
    </div>
  );
}

export default App;
