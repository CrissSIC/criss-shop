import { Header, Footer } from "./components/Static";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Category1 from "./components/Category1";

function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="category1" element={<Category1 />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
