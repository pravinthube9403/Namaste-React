

import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// React.createElement =>ReactElement-js (Object) =>HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "nmaste react 🚀");

// JSX syntax
// babel is converting jsx to html
// jsx => React.createElement =>ReactElement-js (Object) =>HTMLElement(render)

// const jsxHeading = <h1 className="head">Namaste React from jsx 🚀</h1>;

// const jsxHeading = (<h1 className="head">Namaste React from jsx 🚀</h1>);

//React Function Component
// a function returing a jsx is called function component

// const HeadingComponet = () => {
//   return <h1 className="heading">Namaste React functional component</h1>;
// };

// const HeadingComponet2 = () => (
//   <div id="container">
//     {/* //Componet Composition */}
//     <HeadingComponet/>
//     <h1 className="heading">Namaste React functional component</h1>
//   </div>
// );

const HeadingComponet = (
  <h1 className="heading">Namaste React functional component</h1>
);

const HeadingComponet3 = () => {
  return <h1 className="heading">Namaste React functional component 3</h1>;
};

const HeadingComponet2 = () => (
  <div id="container">
    <h2>{HeadingComponet}</h2>
    <HeadingComponet3 />
    <HeadingComponet3></HeadingComponet3>
    {HeadingComponet3()}
    <h1 className="heading">Namaste React functional component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet2 />);

