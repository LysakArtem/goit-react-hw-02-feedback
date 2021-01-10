import PropTypes from 'prop-types';
// import s from './FriendList.module.css';
// import FriendListItem from './../FriendListItem/FriendListItem';
export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      {/* <h1>Please leave feedback</h1> */}
      <button
        type="button"
        onClick={() => {
          onLeaveFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onLeaveFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onLeaveFeedback('bad');
        }}
      >
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
