import { fireEvent, render, screen } from "@testing-library/react";
import Layout from "../../routing-n-error-handling/Layout";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render layout component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Layout />
      </Provider>
    </BrowserRouter>
  );

  //const loginBtn = screen.getByRole("button");

  //If multile buttons are in same componet, then we can differencient with `name` passing as object in 2nd parameter.
  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render layout component with a cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Layout />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart (0 items)");

  expect(cart).toBeInTheDocument();
});

//useing regex
it("Should render layout component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Layout />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/); //checking the `Cart` keyword

  expect(cart).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Layout />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
