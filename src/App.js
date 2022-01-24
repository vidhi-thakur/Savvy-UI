import './App.css';
import HorizontalCard from './components/cards/horizontalCard/HorizontalCard';

function App() {
  return (
    <div className="App">
      <HorizontalCard
        heading="This is card heading"
        subHeading="This is card subheading"
      />
    </div>
  );
}

export default App;
