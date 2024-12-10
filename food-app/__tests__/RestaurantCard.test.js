import { render, screen } from "@testing-library/react";
import RestaurantCard from "../src/components/RestaurantCard";
import MOCK_DATA from "../src/utils/mocks/resCardMock.json"; 
import "@testing-library/jest-dom";

it("Should have image inside Restaurant Card", () => {
    render(<RestaurantCard restaurantDetails={MOCK_DATA}/>)

    const imgElement = screen.getByRole("img");

    expect(imgElement).toBeInTheDocument();
});

it("Should have 3 paragraphs elements", () => {
    render(<RestaurantCard restaurantDetails={MOCK_DATA}/>);

    const paragraphElements = screen.getAllByRole("paragraph");

    expect(paragraphElements).toHaveLength(3);
});

it("Should have restaurant name", () => {
    render(<RestaurantCard restaurantDetails={MOCK_DATA}/>);

    const restaurantName = screen.getByText(MOCK_DATA.name);

    expect(restaurantName).toBeInTheDocument();
})