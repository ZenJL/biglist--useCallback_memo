import { useState, useCallback } from 'react';
import './App.css';


// components
import BigLists from './components/BigLists';

function App() {
  const [value, setValue] = useState(0)

  // handle memorized function without return => useCallback
  const handleClick = useCallback((item) => {
    setValue(item);
    console.log(`click item ${item}`)
  }, []);


  console.log('present state:', value)
  console.log('you clicked:', value)

  return (
    <div className="App">

      <BigLists handleClick={handleClick} />

    </div>
  );
}

export default App;
