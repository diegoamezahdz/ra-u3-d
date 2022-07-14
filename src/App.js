import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Registro from "./routes/Registro";
import Login from "./routes/Login";

const App = () => {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registro/*" element={<Registro />} />

        </Routes>
      </Router>
      
      

    
  );
}


export default App;
