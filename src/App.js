import React from "react";
import Main from "./components/Main";
import CompA from "./comps/context/CompA";
import CompC from "./comps/context/CompC";
import { UserProvider } from "./comps/context/Context";
import ClickCounter from "./comps/HOC/ClickCounter";
import HoverCounter from "./comps/HOC/HoverCounter";
import IndexMoment from "./comps/Lodash/IndexLodash";
import Pwd from "./comps/passwordGenerator/Pwd";
import Mains from "./redux/Mains";
function App() {
  return (
    <div className="App">
      <Mains/>
      {/* <Main /> */}
      {/* <CompA /> */}
      {/* <div>
        <ClickCounter />
        <HoverCounter />
      </div>
      <UserProvider value="hello brilworks">
        <CompC />
      </UserProvider> */}
      {/* <IndexMoment /> */}
      <br />
      {/* <Pwd /> */}
    </div>
  );
}

export default App;
