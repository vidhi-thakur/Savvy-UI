import './App.css';
import LinkButton from './components/buttons/LinkButton';

function App() {
  return (
    <div className="App">
      <LinkButton
        handleClick={() => console.log("link clicked")}
      >
        LINK
      </LinkButton>
    </div>
  );
}

export default App;
