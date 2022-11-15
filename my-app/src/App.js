import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/FunctionStateful';

import FunctionalGreetingProps from './components/FunctionalGreetingProps';

function App() {
  return (
    <div className="App">
      
      <StatefulGreeting  name='mike' /> 
    </div>
  );
}

export default App;
