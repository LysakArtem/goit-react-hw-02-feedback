import PropTypes from 'prop-types';
// import s from './FriendList.module.css';
// import FriendListItem from './../FriendListItem/FriendListItem';
export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
