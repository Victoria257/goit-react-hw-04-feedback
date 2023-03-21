import css from './NotificationMessage.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div className={css.notificationMessage}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
