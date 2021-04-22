import { useState } from "react";

const Button = ({ handleClick, text }) => {
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>;
};

const Statistic = ({ text, value }) => {
  <tr>
    <td>{text}</td>
    <td>{value} </td>
  </tr>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good + bad + neutral) / 3;
  const positive = (good / all) * 100;
  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={avg} />
        <Statistic text="positive" value={`${positive} %`} />
      </table>
    );
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => setGood(good + 1);
  const setToNeutral = () => setNeutral(neutral + 1);
  const setToBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text="good" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setToBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
