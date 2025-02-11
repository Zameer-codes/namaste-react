import { Provider } from "react-redux";
import AppStore from "./redux/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}

export default App;
