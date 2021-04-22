import React, { useState } from "react";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text} </button>
    </div>
  );
};

const Vote = ({ value }) => {
  return (
    <div>
      <p>has {value} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  //storing quotes
  const [selected, setSelected] = useState(0);
  // storing votes
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  //functions when clicking buttong: changing quotes and adding votes
  const nextQuote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };
  const voteFunction = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const highestVote = Math.max(...votes);
  const highestAnecdote = anecdotes[votes.indexOf(highestVote)];

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <Vote value={votes[selected]} />
      <Button text="vote" handleClick={voteFunction} />
      <Button text="next anecdote" handleClick={nextQuote} />
      <Header text="Anecdote with most votes" />
      {highestAnecdote}
      <Vote value={highestVote} />
    </div>
  );
};

export default App;
