import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  btnGood,
  btnNeutral,
  btnBad,
  total,
  positivePercentage,
}) => (
  <>
    <ul>
      <li className={css.statisticsItem}>Good: {btnGood}</li>
      <li className={css.statisticsItem}>Neutral: {btnNeutral}</li>
      <li className={css.statisticsItem}>Bad: {btnBad}</li>
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  btnGood: PropTypes.number.isRequired,
  btnNeutral: PropTypes.number.isRequired,
  btnBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
