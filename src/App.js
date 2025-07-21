import './App.css';
import React, {useState} from 'react';

function App() {

  const [state, setState] = useState(0);

  

  const incr = () => {
    
    setState(state + 1)
  }
  const decr = () => {
    if(state <= 0) {
      return 1
    }
    setState(state - 1)
    
  }

  return (
    
   <div className="App">
        <h1>{state}</h1>
        <button onClick={incr}>incr</button>
        <button onClick={decr}>decr</button>
    </div>
  );
}

export default App;
