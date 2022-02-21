import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Ragester from './components/Ragester';
import Logen from './components/Logen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ragester" element={<Ragester />} />
        <Route path="/logen" element={<Logen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
