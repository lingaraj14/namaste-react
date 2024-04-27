import { render, screen } from "@testing-library/react";
import Contact from "../../routing-n-error-handling/Contact";
import "@testing-library/jest-dom";

//`describe` make the test case in a group
describe("Contact us page Test Case", () => {
  /* beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  }); */

  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");  //by element
    const button = screen.getByText("Submit"); //by text

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputEl = screen.getByPlaceholderText("Enter Name");

    //Assertion
    expect(inputEl).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    const inputEl = screen.getAllByRole("textbox");

    //Assertion
    expect(inputEl.length).toBe(2);
  });
});
