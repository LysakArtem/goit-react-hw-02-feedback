import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = null;
  // let  positiveFeedback =null;

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    return this.totalFeedback
      ? (this.state.good / this.totalFeedback) * 100
      : 0;
  }

  addFeedback = (options) => {
    this.setState((prev) => ({ [options]: prev[options] + 1 }));
  };

  render() {
    this.countTotalFeedback();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback}
              positivePercentage={
                Math.round(this.countPositiveFeedbackPercentage() * 100) / 100
              }
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
