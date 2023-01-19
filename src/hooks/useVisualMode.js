import {useState} from 'react';

// Allows easy transitions between different views of the appointment component
// takes initial: String - initial given mode
// state {
// mode: String,
// history: Array
// }
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // sets the mode as the given newMode - if replace=true, then the last item in the history
  // array is replaced by the new mode
  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      history.pop();
    } 
    setHistory([...history, newMode]);
    
  }
  // removes the last item in the history array, and sets the mode to be the second to last s
  function back(){
    if (history[history.length -1] !== initial) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    }
    
  }

  return {
    mode,
    transition,
    back
  }
};