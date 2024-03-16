//Date: 11-03-2024 :: 11:37 PM

//1. Normal or single element render in DOM
/* const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world From React"
);
console.log("heading==:", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

//2. Create parent and child(nested tags) html elements
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div>
*/
/* const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);
console.log("element===:", element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element); */

//3.(i) Create siblings
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

/* const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
console.log("element===:", element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element); */
//Note: To create siblings, pass child as in an array.

//3.(ii)
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/
const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log("element===:", element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
