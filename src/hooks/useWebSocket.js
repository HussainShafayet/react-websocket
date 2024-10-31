// src/hooks/useWebSocket.js
import { useEffect, useRef, useState } from "react";

const useWebSocket = (url, token) => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("Disconnected");
  const ws = useRef(null);

  useEffect(() => {
     // Include the token as a query parameter in the WebSocket URL
     const wsUrl = `${url}?token=${token}`;
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log("Connected to WebSocket");
      setStatus("Connected");
    };

    ws.current.onmessage = (event) => {
      console.log("Message received:", event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.current.onclose = () => {
      console.log("Disconnected from WebSocket");
      setStatus("Disconnected");
    };

    return () => {
      ws.current.close();
    };
  }, [url]);

  const sendMessage = (message) => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    } else {
      console.log("WebSocket is not open");
    }
  };

  return { messages, sendMessage, status };
};

export default useWebSocket;
