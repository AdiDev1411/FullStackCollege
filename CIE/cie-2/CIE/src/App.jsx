

import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [Fname, setFname] = useState("");
  const [surname, setSurname] = useState("");

  const [dateTime, setDateTime] = useState("");

  // Feedback counts
  const [feedback, setFeedback] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0,
  });

  const [myCount, setMyCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDateTime({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const categories = ["Excellent", "Good", "Average", "Poor"];
    const crowdTimer = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setFeedback((prev) => ({
        ...prev,
        [categories[random]]: prev[categories[random]] + 1,
      }));
    }, 2000);
    return () => clearInterval(crowdTimer);
  }, []);

  const handleFeedback = (category) => {
    setFeedback((prev) => ({ ...prev, [category]: prev[category] + 1 }));
    setMyCount((c) => c + 1);
  };

  const increment = () => setMyCount((c) => c + 1);
  const decrement = () => setMyCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setMyCount(0);
  const incrementByFive = () => setMyCount((c) => c + 5);

  return (
    <div className="dashboard-container theme-blue">
      <h2>Product Feedback Dashboard</h2>
      <form className="dashboard-form" onSubmit={e => e.preventDefault()}>
        <label>First name:&nbsp;</label>
        <input
          type="text"
          value={Fname}
          onChange={e => setFname(e.target.value)}
        /> 
        <label>Last name:&nbsp;</label>
        <input
          type="text"
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />
      </form>
      <p className="greeting">
        {Fname || surname ? `Welcome, ${Fname} ${surname}!` : "Welcome!"}
      </p>
      <p className="datetime">
        Date: {dateTime.date} <br />
        Time: {dateTime.time}
      </p>
      <hr />
      <h3>Feedback Submission Panel</h3>
      <div className="feedback-panel">
        {Object.keys(feedback).map((cat) => (
          <div key={cat}>
            <button className={`feedback-btn feedback-btn-${cat.toLowerCase()}`}
              onClick={() => handleFeedback(cat)}
            >
              {cat}
            </button>
            <div className="feedback-count">
              {feedback[cat]}
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h3>Your Feedback Counter</h3>
      <div className="counter-controls">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementByFive}>+5</button>
        <span>Count: {myCount}</span>
      </div>
    </div>
  );
}

export default App;
