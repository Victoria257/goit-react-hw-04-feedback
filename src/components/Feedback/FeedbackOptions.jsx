import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleBtn, options }) => {
  return (
    <div className={css.buttonsWrapper}>
      {options.map(buttonName => (
        <button
          key={buttonName}
          className={css.button}
          name={buttonName}
          type="button"
          onClick={handleBtn}
        >
          {buttonName.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleBtn: PropTypes.func.isRequired,
};
