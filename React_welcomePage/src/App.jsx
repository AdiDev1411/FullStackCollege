import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://www.reviewadda.com/assets/uploads/article_images/Charusat_University_Gujarat.jpg')`,
          }}
        ></div>

        <div className="relative z-10 text-center">
          <div className="text-6xl font-bold mb-8 text-center drop-shadow-2xl">
            Welcome To CHARUSAT!!!!
          </div>

          <div className="text-center space-y-4">
            <div className="text-2xl font-semibold drop-shadow-lg">
              {formatDate(currentDateTime)}
            </div>
            <div className="text-4xl font-mono font-bold tracking-wider drop-shadow-lg">
              {formatTime(currentDateTime)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
