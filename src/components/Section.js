import PropTypes from 'prop-types';
// import s from './FriendList.module.css';
// import FriendListItem from './../FriendListItem/FriendListItem';
export default function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
