import { TaskConstants } from "../constants";

const updateNameAction = model => ({
  type: TaskConstants.UPDATE_NAME,
  model: model
});

export { updateNameAction };
