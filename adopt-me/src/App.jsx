// Notes
// One Way Data Flow, Parent -> Child, very explicit
//
//
import React from "react"
import ReactDOM from "react-dom"

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

//////////////
// Before JSX
const App = () => {
  return React.createElement(
    "div", // element, tag
    {}, // attributes
    [
      React.createElement("h1", {}, "Adopt Me!"), // children
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
// Before JSX
//////////////
