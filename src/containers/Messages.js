import React, { useReducer } from "react";
import shortid from "shortid";
import FlashMessageList from "../components/FlashMessageList";

// reducer initial state
const initialState = [];

// flash reducer
function reducer(state, action) {
  switch (action.type) {
    // add flash message
    case "add":
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.payload.type,
          text: action.payload.text
        }
      ];

    // remove message from array
    case "remove":
      return state.filter(message => message.id !== action.payload);

    // reset message array
    case "reset":
      return initialState;

    // default state
    default:
      return state;
  }
}

const Messages = () => {
  // component hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Messages">
      <h1>Messages Page</h1>
      <div className="wrapper">
        {/* flash messages container */}
        <main className="content">
          <FlashMessageList messageList={state} dispatch={dispatch} />
        </main>
        {/* sidebar with buttons */}
        <aside className="sidebar">
          {/* add success message */}
          <button
            onClick={() =>
              dispatch({
                type: "add",
                payload: {
                  type: "success",
                  text: "Successfuly created user account."
                }
              })
            }
          >
            Add Success Flash
          </button>

          {/* add error message */}
          <button
            onClick={() =>
              dispatch({
                type: "add",
                payload: {
                  type: "error",
                  text: "Error creating user account."
                }
              })
            }
          >
            Add Error Flash
          </button>

          {/* reset messages to initial state */}
          <button onClick={() => dispatch({ type: "reset" })}>
            Clear Flash
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Messages;
