import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  btnGood,
  btnNeutral,
  btnBad,
  setBtnGood,
  setBtnNeutral,
  setBtnBad,
}) => (
  <div className={css.buttonsContainer}>
    <button
      className={css.categoryButton}
      type="button"
      onClick={() => setBtnGood(btnGood + 1)}
    >
      good
    </button>
    <button
      className={css.categoryButton}
      type="button"
      onClick={() => setBtnNeutral(btnNeutral + 1)}
    >
      neutral
    </button>
    <button
      className={css.categoryButton}
      type="button"
      onClick={() => setBtnBad(btnBad + 1)}
    >
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  btnGood: PropTypes.number.isRequired,
  btnNeutral: PropTypes.number.isRequired,
  btnBad: PropTypes.number.isRequired,
  setBtnGood: PropTypes.func.isRequired,
  setBtnNeutral: PropTypes.func.isRequired,
  setBtnBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
