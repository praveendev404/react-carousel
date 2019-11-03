import { TaskConstants } from "../constants";

const updateNameAction = id => ({
  type: TaskConstants.UPDATE_NAME,
  id: id
});

export { updateNameAction };
