import React from "react";
import "./ReactionMessage.css";

export default function ReactionMessage({ message, reactionTime }) {
  return (
    <div className="reaction-message">
      <div className="message-text">{message}</div>
      {reactionTime && (
        <div className="reaction-time">
          Last: <span>{reactionTime} ms</span>
        </div>
      )}
    </div>
  );
}
