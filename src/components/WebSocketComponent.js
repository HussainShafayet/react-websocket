// src/components/WebSocketComponent.js
import React, { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";

const WebSocketComponent = () => {
    const token = "your-authentication-token"; // Replace this with your actual token
  const { messages, sendMessage, status } = useWebSocket("wss://echo.websocket.org", token); // Replace with your WebSocket URL
  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div>
      <h2>WebSocket Status: {status}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>

      <h3>Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
