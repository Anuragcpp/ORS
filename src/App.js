
import React from 'react';
import Homepage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import CandidateSearch from './components/CandidateSearch';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/candidate-search" component={CandidateSearch} />
        <Route component={NotFound} /> */}
      {/* </Routes> */}
      {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}>
          <Route exact path="Login" element={<Login/>} />
          <Route exact path="Register" element={<Register/>} />
          <Route exact path="CandidateSearch" element={<CandidateSearch/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}

<BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CandidateSearch" element={<CandidateSearch />} />
      </Routes>
      
    </BrowserRouter>
      
      
      
      
    </div>
  );
};

export default App;
