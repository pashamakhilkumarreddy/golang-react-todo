import React from 'react';
import { useTranslation } from 'react-i18next';
import TodoItem from './Todo';
import useTodoStore from 'store/useTodoStore';

const Todos: React.FC<any> = () => {
  const { t } = useTranslation();

  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="box mb-6">

      {
        todos.length === 0 ? (
          <h3 className="has-text-centered is-size-4 has-text-weight-bold">{t('general.todo.no-todos')}</h3>
        ) : (
          <>
            <h3 className="is-center title is-size-4">{t('general.todo.todo-list')}</h3>
            <ul>
              {todos.map((todo: any) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          </>
        )
      }
    </div>
  );
};

export default Todos;
