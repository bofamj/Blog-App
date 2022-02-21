import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Ragester from './components/Ragester';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ragester />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
