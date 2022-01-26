import './App.css';
import Button from './components/buttons/buttonCTA/Button';

function App() {
  return (
    <div className="App">
      <Button
        handleClick={() => console.log("link clicked")}
        color="primary-outlined"
      >
        Read more
      </Button>
    </div>
  );
}

export default App;
