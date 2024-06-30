import React, { useEffect } from 'react';
import { useNotificationStore } from '../../store/useNotificationStore';
import './styles.css';

const notificationColors: any = {
  'success': 'has-background-primary',
  'error': 'has-background-danger',
  'info': 'has-background-info',
}

const Notification: React.FC = () => {
  const { notifications, removeNotification } = useNotificationStore((state: any) => ({
    notifications: state.notifications,
    removeNotification: state.removeNotification,
  }));

  useEffect(() => {
    notifications.forEach((notification: any) => {
      const timer = setTimeout(() => removeNotification(notification.id), 150000);
      return () => clearTimeout(timer);
    });
  }, [notifications, removeNotification]);

  return (
    <div className="notification-container">
      {notifications.map((notification: any) => (
        <div
          key={notification.id}
          className={`mb-1 p-4 notification is-flex is-justify-content-center is-align-items-center ${notificationColors[notification.type] || ''} is-${notification.type}`}
        >
          <div className='mr-5'>{notification.message}</div>
          <button className="delete is-block has-background-danger" onClick={() => removeNotification(notification.id)} />
        </div>
      ))}
    </div>
  );
};

export default Notification;
