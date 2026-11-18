import logo from './logo.svg';
import './App.css';

// ↓↓↓↓↓↓↓ JSX ↓↓↓↓↓↓↓↓↓
function App() {
  const text = 'Hello Worldは最高の会社だ!';

  return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}

export default App;