import './App.css';
import IconBtnCard from './components/cards/iconBtnCard/IconBtnCard';

function App() {
  return (
    <div className="App">
      <IconBtnCard
        heading="This is card heading"
        subHeading="This is card subheading"
        content="Lorem Ipsum is simply dummy lorem ipsum has been the industry's standard dummy text text of the printing and typesetting industry."
      />
    </div>
  );
}

export default App;
