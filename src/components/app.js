import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import { useState } from "react";
import Header from "./Header";
const items = [
  {
    title: "what is react?",
    content: "react is a front end javascript framework",
  },
  {
    title: "why use react??",
    content: "react is a favorite js library among engineers",
  },
  {
    title: "how do you use react?",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "Blue",
  },
];

//! basic way to route
// const showAccordion = () => {
//   if (window.location.pathname === "/") return <Accordion items={items} />;
// };
// const showList = () => {
//   if (window.location.pathname === "/list") return <Search />;
// };
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") return <DropDown />;
// };
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") return <Translate />;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search items={items} />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;

//!<Accordion items={items}></Accordion>
