import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Ragester from './components/Ragester';
import Logen from './components/Logen';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/ragester" element={<Ragester />} />
        <Route path="/login" element={<Logen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
