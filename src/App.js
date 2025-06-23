// // App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Bar from './Components/Bar';
// import About from './Components/About';
// import Learning from './Components/Learning';
// import Discount from './Components/Discount';
// import Faqs from './Components/Faqs';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import Stack from './Components/Stack';
// import Project from './Components/Project';
// import Digital from './Components/Digital';

// const Home = () => (
//   <>
//     <About />
//     <Learning />
//     <Discount />
//     <Faqs />
//     <Contact />
//     <Footer />
//   </>
// );

// const App = () => {
//   const location = useLocation();
//   const hideNavbar = ['/login', '/signup', '/stack', '/project', '/digital'].includes(location.pathname);

//   return (
//     <>
//       {!hideNavbar && <Bar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/stack" element={<Stack />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/digital" element={<Digital />} />
//       </Routes>
//     </>
//   );
// };

// const AppWrapper = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// export default AppWrapper;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Bar from "./Components/Bar";
import About from "./Components/About";
import Learning from "./Components/Learning";
import Discount from "./Components/Discount";
import Faqs from "./Components/Faqs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Stack from "./Components/Stack";
import Project from "./Components/Project";
import Digital from "./Components/Digital";

const Home = () => {
  return (
    <>
      <About />
      <Learning />
      <Discount />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

const MainApp = () => {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup", "/stack", "/project", "/digital"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Bar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/project" element={<Project />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);

export default AppWrapper;

