import React from 'react';
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home} from "./routes/routes.js"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route  path="/login" element={<LoginPage/>}/>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/signup" element={<SignupPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
