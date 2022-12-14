import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        type="button"
        name={option}
        className={css.feedbackBtn}
        onClick={onLeaveFeedback}
        value={option}
      >
        {option}
      </button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
