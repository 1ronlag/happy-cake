import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Home from "./views/Home";


import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
