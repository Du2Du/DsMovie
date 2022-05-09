import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing, Form } from "pages";
import { NavBar } from "components";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
