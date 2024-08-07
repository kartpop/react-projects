import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeRemaining, onResetTime },
  ref
) {
  const dialog = useRef();

  const isLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining/ (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  return (createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onResetTime}>
      {isLost && <h2>You lost</h2>}
      {!isLost && <h2>You won! Your score: {score}</h2>}
      <p>Target time: {targetTime} seconds</p>
      <p>
        Timer stopped with <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onResetTime}>
        <button>Close</button>
      </form>
    </dialog>, document.getElementById("modal")
  ));
});

export default ResultModal;
