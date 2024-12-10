import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import MOCK_DATA  from "../src/utils/mocks/resListMock.json";
import "@testing-library/jest-dom";
import { fetchRestaurants } from "../src/api/api";
import { BrowserRouter } from "react-router-dom";


// Integration testing

jest.mock("../src/api/api", ()=>({
    fetchRestaurants: jest.fn(),
}));

// global.fetch = jest.fn(()=>{

//     return Promise.resolve({
//         json:()=>{
//             return {
//                 MOCK_DATA
//             }
//         }
//     })
// })

test("Should be able to filter restaurants", async () => {

    fetchRestaurants.mockResolvedValue(MOCK_DATA);

    await act(async()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ))

    const restaurantsBefore = screen.getAllByTestId("resCard");
    expect(restaurantsBefore).toHaveLength(7);

    const searchBtn = screen.getByTestId("searchBtn")
    const searchInput = screen.getByTestId("searchInput");

    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, {target:{value:"Hotel"}});
    fireEvent.click(searchBtn);

    const restaurants = screen.getAllByTestId("resCard");
    expect(restaurants).toHaveLength(2);

    // console.log(restaurants.length, "after");
    // console.log(restaurantsBefore.length, "before");

});
