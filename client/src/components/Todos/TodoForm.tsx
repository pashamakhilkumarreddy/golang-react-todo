import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNotificationStore } from 'store/useNotificationStore';
import useTodoStore from 'store/useTodoStore';

const TodoForm: React.FC<any> = () => {
  const { addNotification } = useNotificationStore((state) => ({
    addNotification: state.addNotification,
  }));

  const showSuccess = () => addNotification({ message: 'Todo added successfully!', type: 'success' });
  const showError = () => addNotification({ message: 'Input cannot be empty.', type: 'error' });

  const { t } = useTranslation();

  const [text, setText] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
      setIsEmpty(false);
      showSuccess();
    } else {
      setIsEmpty(true);
      showError();
    }
  }

  return (
    <div className="box">
      <h3 className="title is-4">{t('general.todo.add-todo')}</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className={`input ${isEmpty ? 'input-error' : ''}`}
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (e.target.value.trim()) {
                  setIsEmpty(false);
                }
              }}
              placeholder="Enter a new todo"
            />
          </div>
        </div>
        <button className="button is-primary" type="submit">
          {t('general.todo.add')}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
