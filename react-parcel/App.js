import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => {
  return <h1>Title using JSX</h1>;
};

const body = () => {
  return (
    <>
      {'JS code executed with security wrapped in "{}"'}
      <br />
      {"This ensures cross-site scripting"}
    </>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Title />
      {body()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Home />);
