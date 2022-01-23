import './App.css';
import TextCard from './components/cards/textCard/TextCard';

function App() {
  return (
    <div className="App">
      <TextCard
        heading="This is card heading"
        subHeading="This is card subheading"
        content="Lorem Ipsum is simply dummy lorem ipsum has been the industry's standard dummy text text of the printing and typesetting industry."
        btn={<button>LINK</button>}
      />
    </div>
  );
}

export default App;
