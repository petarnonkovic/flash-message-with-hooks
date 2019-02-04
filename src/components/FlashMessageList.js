import React from "react";
import FlashMessage from "./FlashMessage";

const FlashMessageList = ({ messageList, dispatch }) => {
  if (messageList.length !== 0) {
    const messages = messageList.map(message => {
      return (
        <FlashMessage key={message.id} message={message} dispatch={dispatch} />
      );
    });
    return <React.Fragment>{messages}</React.Fragment>;
  }
  return null;
};

export default FlashMessageList;
