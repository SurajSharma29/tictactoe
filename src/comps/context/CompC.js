import React from "react";
import { UserConsumer } from "./Context";

function CompC() {
  return (
    <div>
      <UserConsumer>
        {(name) => {
          return <div>hello {name}</div>;
        }}
      </UserConsumer>
    </div>
  );
}

export default CompC;
