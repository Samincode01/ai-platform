import { useState } from "react";

export function Toasts() {
  const [show, setShow] =
    useState(true);

  if (!show) return null;

  return (
    <div id="toast-container">
      <div className="toast toast-success">
        <span>
          Toast is working
        </span>

        <button
          className="toast-close cursor-pointer hover:bg-cyan-800"
          onClick={() => setShow(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}