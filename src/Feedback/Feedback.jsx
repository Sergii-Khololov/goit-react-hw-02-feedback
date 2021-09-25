import React, { Component } from 'react';
import shortid from 'shortid';

import FeedbackOptions from '../FeedOptions';
import Section from '../Section';
import Statistics from '../Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    this.setState(() => ({
      [event.target.name]: this.state[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveTotal = Math.floor((good * 100) / this.countTotalFeedback());
    return positiveTotal;
  };

  render() {
    return (
      <div key={shortid.generate()} className="container">
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleIncrement}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default Feedback;
