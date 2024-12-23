import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Teacher from './teacher.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello World!</p>
      <Teacher />
    </>
  );
}

export default App;
