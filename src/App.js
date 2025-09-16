import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
}

export default App;
