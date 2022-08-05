import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);
  const onFeedbackButtonClick = evt => {
    switch (evt.target.name) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;
      case 'bad':
        setBadFeedback(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / countTotalFeedback()) * 100);
    return positivePercentage;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        padding: '20px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onFeedbackButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="These is no statistics" />
        )}
      </Section>
    </div>
  );
};
