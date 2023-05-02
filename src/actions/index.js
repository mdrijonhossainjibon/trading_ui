const ADD_TODO = "ADD_TODO";

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
