import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function useMessageQueue() {
  const [messages, setMessages] = useState([]);

  const ref = useRef();
  ref.current = messages;

  function addMessage(caption, type = "info", timeout = 1500) {
    const id = uuid();
    setMessages([
      {
        id,
        type,
        caption,
        timeout: setTimeout(() => {
          removeMessage(id);
        }, timeout),
      },
      ...messages,
    ]);
  }

  function removeMessage(id) {
    setMessages(ref.current.filter((msg) => msg.id !== id));
  }

  return { addMessage, removeMessage, messages };
}