import React from "react";
import "./ReactionChart.css";

export default function ReactionChart({ data }) {
  if (!data.length) return null;

  const max = Math.max(...data);

  return (
    <div className="chart-container">
      {data.map((time, i) => {
        const heightPercent = (time / max) * 100;
        return (
          <div
            key={i}
            className="chart-bar"
            title={`${time} ms`}
            style={{
              height: `${heightPercent}%`,
            }}
          />
        );
      })}
    </div>
  );
}
