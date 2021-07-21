import EightBall from './EightBall';
import answers from './helpers';

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
