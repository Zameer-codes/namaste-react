import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

test("Should load Contact component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should conatin Submit text", () =>{
    render(<Contact/>)

    const submitBtn = screen.getByText("Submit");

    expect(submitBtn).toBeInTheDocument();
})

test("Should contain two input boxes", () => {
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})