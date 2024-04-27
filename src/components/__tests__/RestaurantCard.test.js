import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  //To check the resaurant card is rendering or not, let's check the name of the restaurant is rendering or not in the DOM
  const resCard = screen.getByText("Asha Tiffins");

  expect(resCard).toBeInTheDocument();
});
