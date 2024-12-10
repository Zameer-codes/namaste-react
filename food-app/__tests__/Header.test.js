import { Provider } from "react-redux";
import Header from "../src/components/Header";
import appStore from "../src/utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("Should have logout button in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoutBtn = screen.getByText("Logout");

  expect(logoutBtn).toBeInTheDocument();
});
