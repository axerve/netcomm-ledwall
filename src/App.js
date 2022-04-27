import Slider, { Slide } from './components/Slide';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Slider>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
      </Slider>
    </div>
  );
}

export default App;
