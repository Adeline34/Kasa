import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Accommodation from "../../pages/Accommodation"
import Error404 from "../../pages/Error404";

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/accommodation/*" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
