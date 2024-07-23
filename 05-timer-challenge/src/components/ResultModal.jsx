import { useRef, useImperativeHandle, forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialog.current.showModal(),
    }));

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>Target time: {targetTime} seconds</p>
      <p>
        Timer stopped with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
