import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Components/Navbar/Navigation';
import AddBlogs from './Components/BlogsComponents/AddBlogs';
import Home from './Components/BlogsComponents/Home';
import BlogsDetails from './Components/BlogsComponents/BlogsDetails';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="/home/blogdetails" element={<Home />} />
        <Route path="/blog/add" element={<AddBlogs />} />
        <Route path='/blog/:blogId' element={<BlogsDetails/>}/>

         
        </Route>
      </Routes>
   </>
  );
}

export default App;
