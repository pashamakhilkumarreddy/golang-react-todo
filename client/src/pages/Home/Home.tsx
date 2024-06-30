import Todos from 'components/Todos';
import TodoForm from 'components/Todos/TodoForm';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * The `Home` component represents the main page where users can input a prompt to generate images using OpenAI's API.
 * It provides a text area for prompt input, a button to trigger image generation, and a gallery to display generated images.
 * @example
 * return (
 *   <Home />
 * )
 * @returns {FC} The rendered Home component.
 */
const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-5">
     
      <h1 className="has-text-centered title is-1">{t('general.home.todos')}</h1>
      <TodoForm  />
      <Todos />
    
    </div>
  );
};

export default Home;
