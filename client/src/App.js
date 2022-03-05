import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Ragester from './components/Ragester';
import Logen from './components/Logen';
import Home from './pages/Home';
import AllBlog from './pages/AllBlog';
import NavBar from './components/NavBar'
import CreatBlog from './pages/CreatBlog';
import UserBlog from './pages/UserBlog';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ragester" element={<Ragester />} />
          <Route path="/login" element={<Logen />} />
          <Route path="/blog" element={<AllBlog />} />
          <Route path="/creat-blog" element={<CreatBlog />}/>
          <Route path="/user-blogs" element={<UserBlog />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
