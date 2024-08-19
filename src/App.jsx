
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Layout from './components/Layout';
import Home from './components/home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:blogTitle" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
