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
      <h2 className={`text-lg font-medium mb-2 ${status === "Connected" ? "text-green-600" : "text-red-600"}`}>
        WebSocket Status: {status}
      </h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 mr-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150"
        >
          Send
        </button>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Messages:</h3>
      <ul className="space-y-2 max-h-40 overflow-y-auto bg-gray-50 p-4 border rounded-lg">
        {messages.map((msg, index) => (
          <li key={index} className="bg-blue-100 px-4 py-2 rounded shadow-sm text-gray-700">
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
