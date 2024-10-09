// second param in React.createElement is for attributes like id, class etc
// third param is children

const heading = React.createElement("h1", { id: "main-header" }, [
  "Created using React CDN",
  React.createElement("div",{ id:"sibling-div"}, React.createElement("h1", {}, "Sibling Tag"))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
