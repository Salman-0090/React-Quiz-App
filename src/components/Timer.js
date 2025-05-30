import { useEffect } from "react";

function Timer({ dispatch, secondsRemaing }) {
  const mins = Math.floor(secondsRemaing / 60);
  const seconds = secondsRemaing % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"} {seconds}
    </div>
  );
}

export default Timer;
