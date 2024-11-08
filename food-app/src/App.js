import ReactDOM from "react-dom/client";
/**
 * it is being imported from react-dom/client since it is improvised in v18 for optimal rendering and supports backward compatibility
 * in v17 or less it is imported from react-dom
 */
import Header from "./components/Header";
import Body from "./components/Body";

const FoodApp = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
