import Api from "./Api";

export default {
  addTodo({ name }) {
    return Api().post("/todos", {
      name,
    });
  },
  fetchTodos() {
    return Api().get("/todos");
  },
  fetchTodo({ id }) {
    return Api().get(`todos/${id}`, {
      params: {
        id,
      },
    });
  },
  updateTodo({ id }) {
    return Api().put(`todo/${id}`, {
      params: {
        id,
      },
    });
  },
  deleteTodo({ id }) {
    return Api().delete(`todo/${id}`, {
      params: {
        id,
      },
    });
  },
};
