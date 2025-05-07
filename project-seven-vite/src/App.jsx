
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Post from './pages/Post';

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
