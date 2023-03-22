import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/NotificationMessage/NotificationMessage';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Section } from 'components/Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtn = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            handleBtn={handleBtn}
            options={Object.keys({ good, neutral, bad })}
          />
        </Section>
      </div>
      <div>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
