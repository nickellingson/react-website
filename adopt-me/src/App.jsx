// Notes
// One Way Data Flow, Parent -> Child, very explicit
//
//
import React from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

//////////////
// Before JSX
// const App = () => {
//   return React.createElement(
//     "div", // element, tag
//     {}, // attributes
//     [
//       React.createElement("h1", {}, "Adopt Me!"), // children
//       React.createElement(Pet, {
//         name: "Luna",
//         animal: "Dog",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         name: "Pepper",
//         animal: "Bird",
//         breed: "Cockatiel",
//       }),
//       React.createElement(Pet, {
//         name: "Doink",
//         animal: "Cat",
//         breed: "Mixed",
//       }),
//     ]
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
// Before JSX
//////////////
