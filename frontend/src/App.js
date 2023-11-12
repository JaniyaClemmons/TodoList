import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


const App = () => {
  return(
    <div className="app">
    
      <BrowserRouter>
      <div className="screens">
     
      <Routes>
        <Route path="/" element ={<HomeScreen />} />      
      </Routes>
     

      </div>
      </BrowserRouter> 
    
      </div> 
  );
}

export default App;

