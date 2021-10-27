import React, { useState } from "react";
import { Chunk } from "react-lodash";
import _ from "lodash";
function IndexLodash() {
  let array = [0, 1, 2, 6, 3, 8, 4, 0, null, 4, undefined, "", "hello"];
  let arr = [0, 4, 2, 3];
  var users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false },
  ];
  //array lodash
  console.log("chunk", _.chunk(array, 2));
  console.log("compact", _.compact(array, 2));
  console.log("concat", _.concat(array, 1, 5, [4, 7, [5, 12], "dfsdjf"]));
  console.log("diff", _.difference(array, arr));
  console.log("diffby", _.differenceBy(array, arr, Math.floor));
  console.log("diffwith", _.differenceWith(array, arr, _.isEqual));
  console.log("drop", _.drop(array, 5));
  console.log("dropRight", _.dropRight(array, 5));
  console.log("dropWhile", _.dropWhile(array));
  console.log(
    "dropRightWhilr",
    _.dropRightWhile(users, function (a) {
      return !a.active;
    })
  );
  console.log("flatten", _.flattenDeep([1, [2, [3, [4]], 5]]));
  console.log("UNIQ", _.uniq([2, 1, 2, 3, 4, 3, 5, 5, 8]));
  // console.log(_.flatten([1, 2, [3, [4]], 5]));
  //_.fill(array, value, [start=0], [end=array.length])

  //Event Propagation-------------------------------------
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleCount = (e) => {
    e.target.value++;
  };
  return (
    <div>
      <div onClick={handleClick}>
        <span onClick={handleClick}>Counter value is: {counter}</span>
        <br />
        <br />
        <br />
        <br />
        <span onClick={handleClick}>Counter value is: {counter}</span>
      </div>
      <div>
        <input type="text" value="1" onClick={handleCount} />
        <input type="text" value="1" onClick={handleCount} />
        <input type="text" value="1" onClick={handleCount} />
      </div>{" "}
    </div>
  );
}

export default IndexLodash;
