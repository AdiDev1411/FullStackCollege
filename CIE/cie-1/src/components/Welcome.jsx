import React, { useState, useEffect } from "react";

const FEEDBACK_CATEGORIES = [
  { key: "excellent", label: "Excellent" },
  { key: "good", label: "Good" },
  { key: "average", label: "Average" },
  { key: "poor", label: "Poor" },
];


const Welcome = () => {
  // name state
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  // date/time state
  const [dateTime, setDateTime] = useState(new Date());

  // Feedback counts
  const [feedbackCounts, setFeedbackCounts] = useState({
    excellent: 0,
    good: 0,
    average: 0,
    poor: 0,
  });

  

  // Participant feedback counter
  const [participantCount, setParticipantCount] = useState(0);

  // Timer for date/time
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated crowd feedback
  useEffect(() => {
    const crowdTimer = setInterval(() => {
      const randomKey =
        FEEDBACK_CATEGORIES[
          Math.floor(Math.random() * FEEDBACK_CATEGORIES.length)
        ].key;
      setFeedbackCounts((prev) => ({
        ...prev,
        [randomKey]: prev[randomKey] + 1,
      }));
    }, 2000);
    return () => clearInterval(crowdTimer);
  }, []);

  // Feedback button click handler
  const handleFeedback = (key) => {
    setFeedbackCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }));
    setParticipantCount((count) => count + 1);
  };

  // Participant counter controls
  const increment = () => setParticipantCount((c) => c + 1);
  const decrement = () => setParticipantCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setParticipantCount(0);
  const incrementByFive = () => setParticipantCount((c) => c + 5);

  // Greeting
  const greeting =
    firstName || surname ? `Welcome, ${firstName} ${surname}!` : "Welcome!";

  // Date/time formatting
  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-xl flex flex-col gap-6">
        {/* Name Input & Greeting */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <input
            className="border p-2 rounded w-full md:w-1/2"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full md:w-1/2"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="text-2xl font-bold text-blue-700 text-center">
          {greeting}
        </div>

        {/* Date and Time */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-lg text-gray-700">{formattedDate}</div>
          <div className="text-2xl font-mono text-purple-700">
            {formattedTime}
          </div>
        </div>

        {/* Feedback Panel */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEEDBACK_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className="bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg text-lg transition"
                onClick={() => handleFeedback(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {FEEDBACK_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="bg-gray-100 rounded-lg p-3 text-center shadow"
              >
                <div className="text-lg font-semibold text-gray-700">
                  {cat.label}
                </div>
                <div className="text-2xl font-bold text-blue-800">
                  {feedbackCounts[cat.key]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participant Feedback Counter */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 flex flex-col items-center gap-3 shadow-inner">
          <div className="text-lg font-semibold text-blue-800 mb-2">
            Your Feedbacks:{" "}
            <span className="text-2xl font-bold">{participantCount}</span>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={increment}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold"
            >
              Decrement
            </button>
            <button
              onClick={reset}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-bold"
            >
              Reset
            </button>
            <button
              onClick={incrementByFive}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
            >
              Increment by 5
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Welcome;

