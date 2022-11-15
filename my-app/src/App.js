import logo from './logo.svg';
import './App.css';

import FunctionalGreetingProps from './components/FunctionalGreetingProps';

function App() {
  return (
    <div className="App">
      
      <FunctionalGreetingProps greeting='hello nice to meet you' name='mike' age='32' /> 
    </div>
  );
}

export default App;
