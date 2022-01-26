import './App.css';
import LinkButton from './components/buttons/link/LinkButton';

function App() {
  return (
    <div className="App">
      <LinkButton
        handleClick={() => console.log("link clicked")}
      >
        Read more
      </LinkButton>
    </div>
  );
}

export default App;
