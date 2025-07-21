import './App.css';
import React, {useState} from 'react';

function App() {

  const [state, setState] = useState(0);
  const [value, setValue] = useState('ТЕКСТ')
  

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
        <div>
        <h2>{value}</h2>
          <input type='text' value={value} onChange={e => setValue(e.target.value)}></input>
        </div>
       <div>
          <h1>{state}</h1>
          <button onClick={incr}>incr</button>
          <button onClick={decr}>decr</button>
       </div>
    </div>
  );
}

export default App;
