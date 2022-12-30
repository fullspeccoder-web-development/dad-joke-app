import "./Joke.css";

const Joke = ({ upvote, votes, downvote, text }) => {
  const colors = [
    "#F44336",
    "#FF9800",
    "#FFC107",
    "#FFEB3B",
    "#CDDC39",
    "#8BC34A",
    "#4CAF50",
  ];
  const emojis = [
    "em-angry",
    "em-confused",
    "em-neutral_face",
    "em-slightly_smiling_face",
    "em-smiley",
    "em-laughing",
    "em-rolling_on_the_floor_laughing",
  ];

  const getColor = () => {
    const colorIndex = Math.floor(votes / 3);
    if (votes >= 15) {
      return colors[colors.length - 1];
    }
    return colorIndex >= 0 ? colors[colorIndex + 1] : colors[0];
  };

  const getEmoji = () => {
    const smileyIndex = Math.floor(votes / 3);
    if (votes >= 15) {
      return emojis[emojis.length - 1];
    }
    return smileyIndex >= 0 ? emojis[smileyIndex + 1] : emojis[0];
  };

  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upvote} />
        <span className="Joke-votes" style={{ borderColor: getColor() }}>
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downvote} />
      </div>
      <div className="Joke-text">{text}</div>
      <div className="Joke-smiley">
        <i
          className={`em ${getEmoji()}`}
          aria-label={`${getEmoji().slice(3)}`}
        />
      </div>
    </div>
  );
};

export default Joke;
