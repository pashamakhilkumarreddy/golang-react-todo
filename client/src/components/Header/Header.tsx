import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import './styles.css';

/**
 * The `Header` component displays the navigation bar of the application.
 * It includes the application title, user location (if available), navigation links, and an online/offline status indicator.
 * The header adjusts its layout for mobile and desktop views.
 * @example
 * return (
 *   <Header />
 * );
 * @returns {React.FC} The rendered Header component.
 */
const Header: React.FC = () => {
  const { t } = useTranslation();

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const watcherID = navigator.geolocation.watchPosition(
      (position) => console.info(position),
      (error) => console.error(error)
    );

    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      navigator.geolocation.clearWatch(watcherID);
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  };

  return (
    <nav className="navbar navbar-custom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Logo />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            {t('general.home')}
          </a>
        </div>

        <div className="navbar-end">
          {position && (
            <div className="navbar-item">
              <div className="location-info">
                {t('general.message.location')}: {position.lat.toFixed(2)}, {position.lng.toFixed(2)}
              </div>
            </div>
          )}

          <div className={`navbar-item status-indicator ${isOnline ? 'online' : 'offline'}`}>
            {isOnline ? 
              <a className="button is-primary">
                <strong>{t('general.message.online')}</strong>
              </a> 
              : 
              <a className="button is-primary">
                <strong>{t('general.message.offline')}</strong>
              </a>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
