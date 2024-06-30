import { create } from 'zustand';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
};

type Action = {
  addTodo: (text: string) => void;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  clearCompleted: () => void;
};

const useTodoStore = create<State & Action>((set) => ({
  todos: [],
  
  addTodo: (text) => {
    const newTodo: Todo = {
      id: Date.now(), 
      text,
      completed: false,
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },

  toggleComplete: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },
}));

export default useTodoStore;
