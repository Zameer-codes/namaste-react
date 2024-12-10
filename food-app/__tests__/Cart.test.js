import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import MenuCard from "../src/components/Menucard";
import MOCK_DATA from "../src/utils/mocks/menuMock.json";
import useMenu from "../src/utils/useMenu";
import { Provider } from "react-redux";
import appStore from "../src/utils/redux/appStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/Cart";

jest.mock("../src/utils/useMenu", () => ({
    __esModule: true, // defining to treat useMenu as ES module for default export
    default: jest.fn(),
}));

it("Should be able to add item to Cart", async() => {
    // jest.spyOn(useMenu,'useMenu').mockResolvedValue(MOCK_DATA.data.cards);
    useMenu.mockReturnValue(MOCK_DATA.data.cards);

    const {debug, baseElement} = await act(async() => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <MenuCard />
            <Header/>
            <Cart/>
        </Provider>
        </BrowserRouter>
    ))
    // debug(baseElement,9999999999);  // can visualise dom elements

    const accordion = screen.getByText("Starters (North Indian) (7)");
    expect(accordion).toBeInTheDocument();

    fireEvent.click(accordion);
    const addBtn = screen.getAllByText("Add +");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const cartElement = screen.getByText("Cart (2)");
    expect(cartElement).toBeInTheDocument();

    fireEvent.click(cartElement);
    const cartItems = screen.getAllByTestId("cartItem");

    expect(cartItems).toHaveLength(2);

    const clearCart = screen.getByTestId("clearCart");
    fireEvent.click(clearCart);

    const cartItemsAfterClear = screen.queryAllByTestId("cartItem");
    expect(cartItemsAfterClear).toHaveLength(0);
})