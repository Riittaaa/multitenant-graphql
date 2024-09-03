import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GetBlogs from "./components/GetBlogs";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import AddBlog from "./components/AddBlog";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="blogs" element={<GetBlogs />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="add-blog" element={<AddBlog />} /> */}
        <Route path="login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
