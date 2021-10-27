import React from "react";

function NewComp(OldComp) {
  return function MyNewComp() {
    return <OldComp value="Maar ke tod deb" />;
  };
}

export default NewComp;
