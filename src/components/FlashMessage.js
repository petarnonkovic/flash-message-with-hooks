import React, { useEffect } from "react";
import classNames from "classnames";

export default ({ message, dispatch }) => {
  // props
  const { id, type, text } = message;
  // actions
  const onClear = () => dispatch({ type: "remove", payload: id });

  useEffect(() => {
    let timer;
    timer = window.setTimeout(() => {
      onClear();
    }, 5000);

    return function cleanup() {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      onClick={onClear}
      className={classNames("alert", {
        "alert-error": type === "error",
        "alert-success": type === "success"
      })}
    >
      <p>{text}</p>
    </div>
  );
};
