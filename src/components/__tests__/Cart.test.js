import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import ItemList from "../ItemList";
import ITEMS_MOCK_DATA from "../mocks/ItemsMock.json";
import Layout from "../../routing-n-error-handling/Layout";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Add to cart test cases", () => {
  it("Should load restaurant menu component", async () => {
    await act(async () => render(<RestaurantMenu />));

    const accordianHeader = screen.getByText("Recommended (12)");

    expect(accordianHeader).toBeInTheDocument();
  });

  it("Should render food items on accordian heading click", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const accordianHeader = screen.getByText("Recommended (12)");

    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(12);
  });

  it("Should add item to the cart on click of add button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenu />
            <ItemList items={ITEMS_MOCK_DATA} />
            <Layout />
          </Provider>
        </BrowserRouter>
      )
    );

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);

    const cartItem = screen.getByText("Cart (1 items)");

    fireEvent.click(addBtns[1]);

    expect(cartItem).toBeInTheDocument();

    const cartItem2 = screen.getByText("Cart (2 items)");

    expect(cartItem2).toBeInTheDocument();
  });

  it("Should render the cart component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <Cart />
        </Provider>
      )
    );

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(2);
  });

  it("Should clear the cart on click of clear cart button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
            <Layout />
          </Provider>
        </BrowserRouter>
      )
    );

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

    fireEvent.click(clearCartBtn);

    const cartCount = screen.getByText("Cart (0 items)");

    expect(cartCount).toBeInTheDocument();
  });
});
