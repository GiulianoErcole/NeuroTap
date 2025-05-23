import React from "react";
import ReactionChart from "./ReactionChart.jsx";
import ReactionMessage from "./ReactionMessage.jsx";
import useReactionTest from "./useReactionTest.jsx";

export default function App() {
  const { phase, reactionTimes, reactionTime, message, handleClick } =
    useReactionTest(3000);

  return (
    <div
      className={`app ${phase === "go" ? "go-phase" : ""}`}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }}
      role="button"
      aria-pressed={phase === "go"}
      aria-label="NeuroTap Reaction Trainer - Click or press space to start or react"
    >
      <header>
        <h1 className="title">NeuroTap</h1>
        <p className="status">{phase === "go" ? "NOW!" : "Get Ready..."}</p>
      </header>

      <main>
        <ReactionMessage message={message} reactionTime={reactionTime} />
        <ReactionChart data={reactionTimes} />
      </main>

      <footer>
        <small className="status">Click or press Space/Enter to start or react.</small>
      </footer>
    </div>
  );
}
