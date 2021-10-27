export const addTask = (data) => {
  console.log("addTask", data);
  return {
    type: "ADD_TASK",
    payload: data,
  };
};

export const deleteTask = (data, id) => {
  console.log("deleteTask", data);
  return {
    type: "DELETE_TASK",
    payload: { data, id },
  };
};
export const updateTask = (id, updated) => {
  console.log("update", updated);
  return {
    type: "UPDATE_TASK",
    payload: { id, updated },
  };
};
