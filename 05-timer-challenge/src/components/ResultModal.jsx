import { useRef, useImperativeHandle, forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeRemaining, onResetTime },
  ref
) {
  const dialog = useRef();

  const isLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      {isLost && <h2>You lost</h2>}
      <p>Target time: {targetTime} seconds</p>
      <p>
        Timer stopped with <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onResetTime}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
