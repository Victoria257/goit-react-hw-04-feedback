import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/NotificationMessage/NotificationMessage';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );

    return (
      <div>
        <div>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              handleBtn={this.handleBtn}
              options={Object.keys(this.state)}
            />
          </Section>
        </div>
        <div>
          <Section title={'Statistics'}>
            {total > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
