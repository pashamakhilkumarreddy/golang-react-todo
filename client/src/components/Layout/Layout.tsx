import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { history } from 'routes/history';
import { useEffect, useRef, useState } from 'react';
import RefreshIcon from 'components/Refresh';

/**
 * `Layout` component represents the overall structure of the application.
 * It includes the `Header`, `Footer`, and a main content area where routed components are displayed.
 *
 * The `Layout` component also integrates with the `history` object to provide navigation and location capabilities.
 * @example
 * return (
 *   <Layout />
 * );
 * @returns {React.FC} The rendered Home component.
 */
const Layout: React.FC = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  const [startPoint, setStartPoint] = useState(0);
  const [pullChange, setPullChange] = useState(0);
  const refreshCont = useRef(null);

  const initLoading = () => {
    // @ts-expect-error refreshCont.current might be null
    refreshCont.current && refreshCont.current.classList.add('loading');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const pullStart = (e: any) => {
    const { screenY } = e.targetTouches[0];
    setStartPoint(screenY);
  };

  const pull = (e: any) => {
    const touch = e.targetTouches[0];
    const { screenY } = touch;
    const pullLength =
      startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
    setPullChange(pullLength);
    console.info({ screenY, startPoint, pullLength, pullChange });
  };

  const endPull = () => {
    setStartPoint(0);
    setPullChange(0);
    if (pullChange > 220) initLoading();
  };

  useEffect(() => {
    window.addEventListener('touchstart', pullStart);
    window.addEventListener('touchmove', pull);
    window.addEventListener('touchend', endPull);
    return () => {
      window.removeEventListener('touchstart', pullStart);
      window.removeEventListener('touchmove', pull);
      window.removeEventListener('touchend', endPull);
    };
  });

  return (
    <>
      <div
        ref={refreshCont}
        style={{ margin: '-2rem', marginTop: `${pullChange / 3.118}px` }}
        className="is-flex is-justify-content-center is-align-items-center"
      >
        <div className="py-5 is-rounded">
          <RefreshIcon pullChange={pullChange} />
        </div>
      </div>
      <Header />
      <main className="h-screen w-full grow overflow-y-scroll bg-white px-8 py-7">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
