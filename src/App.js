import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Form from "./Components/Form";
import NewForm from "./Components/NewForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/newform" element={<NewForm />} />
      </Routes>
    </div>
  );
}

export default App;
