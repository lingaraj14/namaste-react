import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./routing-n-error-handling/Layout";
import About from "./routing-n-error-handling/About";
import Contact from "./routing-n-error-handling/Contact";
import Services from "./routing-n-error-handling/Services";
import Error from "./routing-n-error-handling/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
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
/* const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
//console.log("element===:", element); */

//Now with JSX
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Layout />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
