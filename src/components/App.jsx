import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedbackButtonClick = evt => {
    const newStateName = evt.target.textContent;
    this.setState(prevState => ({
      [newStateName]: prevState[newStateName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  };

  render() {
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good !== 0 ||
          this.state.neutral !== 0 ||
          this.state.bad !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="These is no statistics" />
          )}
        </Section>
      </div>
    );
  }
}
