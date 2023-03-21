import React from 'react';
import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.statistic}>
        <li className={css.statisticSet}>Good: {good}</li>
        <li className={css.statisticSet}>Neutral: {neutral}</li>
        <li className={css.statisticSet}>Bad: {bad}</li>
        <li className={css.statisticSet}>Total: {total}</li>
        <li className={css.statisticSet}>
          Positive feedback:
          {positivePercentage ? ` ${positivePercentage}` : ` 0`}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
