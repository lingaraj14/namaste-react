import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const restaurantCardB4Search = screen.getAllByTestId("resCard"); //get all the restaurant cards

  expect(restaurantCardB4Search.length).toBe(9); //expection is total 9 cards

  const searchInput = screen.getByTestId("searchInput"); //get the search input

  const searchBtn = screen.getByRole("button", { name: "Search" }); //get the button, which name is `Search`

  fireEvent.change(searchInput, { target: { value: "pizza" } }); //enter `pizza` in the search input

  fireEvent.click(searchBtn); //click the serach button

  const restaurantCardAfterSearch = screen.getAllByTestId("resCard"); //get the cards, after clicking on serach button

  //expect(searchInput).toBeInTheDocument();

  expect(restaurantCardAfterSearch.length).toBe(1); //expection is only 1 card, after search with `pizza`
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const restaurantCardByDefault = screen.getAllByTestId("resCard"); //get all the restaurant cards in default loaded

  expect(restaurantCardByDefault.length).toBe(9); //expection is total 9 cards

  const TopRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  }); //get the button, which name is `Top Rated Restaurants`

  fireEvent.click(TopRatedBtn); //click the `Top Rated Restaurants` button

  const restaurantCardOnTopRated = screen.getAllByTestId("resCard"); //get the cards, after clicking on serach button

  expect(restaurantCardOnTopRated.length).toBe(8); //expection is only 1 card, after search with `pizza`
});
