import React, { Component } from 'react';
import { Simulate } from 'react-dom/test-utils';
import './Joke.css';

export default class Joke extends Component {
  static defaultProps = {
    colors: [
      '#F44336',
      '#FF9800',
      '#FFC107',
      '#FFEB3B',
      '#CDDC39',
      '#8BC34A',
      '#4CAF50'
    ],
    emojis: [
      'em-angry',
      'em-confused',
      'em-neutral_face',
      'em-slightly_smiling_face',
      'em-smiley',
      'em-laughing',
      'em-rolling_on_the_floor_laughing'
    ]
  }
  getColor() {
    const colorIndex = Math.floor(this.props.votes / 3);
    const { votes, colors } = this.props;
    if(votes >= 15) {
      return colors[colors.length - 1];
    }
    return (colorIndex >= 0) ? colors[colorIndex + 1] : colors[0];
  }
  getEmoji() {
    const smileyIndex = Math.floor(this.props.votes / 3);
    const { votes, emojis } = this.props;
    if(votes >= 15) {
      return emojis[emojis.length - 1];
    }
    return (smileyIndex >= 0) ? emojis[smileyIndex + 1] : emojis[0];
  }
  render() {
    return (
      <div className='Joke'>
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
          <span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">
          {this.props.text}
        </div>
        <div className="Joke-smiley">
          <i className={`em ${this.getEmoji()}`} aria-label={`${this.getEmoji().slice(3)}`}></i>
        </div>
      </div>
    )
  }
}
