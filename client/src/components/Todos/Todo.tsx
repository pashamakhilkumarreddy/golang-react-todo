import React from 'react';
import useTodoStore from 'store/useTodoStore';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const toggleComplete = useTodoStore((state) => state.toggleComplete);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li className={`list-item ${todo.completed ? 'has-text-success' : ''}`}>
      <label className="is-flex is-align-items-center checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className="ml-2">{todo.text}</span>
        <button className="button is-small ml-2 px-1 py-1 delete has-background-danger" onClick={() => removeTodo(todo.id)} />
      </label>
    </li>
  );
};

export default TodoItem;
