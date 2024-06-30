import React from 'react';
import { Circle } from 'rc-progress';

/**
 * Fallback component.
 *
 * This component is used to display a loading indicator when the content is being loaded.
 * It shows a message indicating that loading is in progress and includes a spinner
 * to visually represent the loading state.
 * @example
 * 
 * return <Fallback />;
 * @returns {React.JSX.Element} The JSX element containing a loading message and spinner.
 */
const Fallback: React.FC = () => {
  return (
    <div className="container has-text-centered">
      <div className="box is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <p className="title is-4">Loading...</p>
       <Circle />
      </div>
    </div>
  );
};

export default Fallback;
