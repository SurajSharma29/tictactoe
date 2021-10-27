import { IndexOf } from "react-lodash";
import { updateTask } from "../action/Index";

export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      console.log("add", payload);
      return [...state, payload];

    case "DELETE_TASK":
      console.log("payload", payload.id);
      const newData = [...state];
      newData.splice(payload.id, 1);
      console.log("newdata", newData);
      return newData;
    case "UPDATE_TASK":
      const updatedData = [...state];
      updatedData[payload.id] = payload.updated;
      return updatedData;
    // const editedTask = state.map((task) => {
    //   if (payload.id === task.id) {
    //     let newTask = prompt("enter ur text", payload.data);
    //     console.log(newTask);
    //     return { ...task, input: newTask };
    //   }
    //   return state;
    // });
    default:
      return state;
  }
};
