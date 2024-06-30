import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * The `PageNotFound` component is displayed when a user navigates to a route that does not exist.
 * It provides a message indicating that the page was not found and offers a button to navigate back to the home page.
 * @example
 * return (
 *   <PageNotFound />
 * )
 * @returns {React.JSX.Element} The rendered PageNotFound component.
 */
const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center min-vh-100">
    <div className="notification is-danger has-text-centered">
      <h1 className="title is-1">404</h1>
      <p className="subtitle is-4">
        Oops! The page you are looking for does not exist.
      </p>
      <button className="button is-primary" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  </div>
  );
};

export default PageNotFound;
