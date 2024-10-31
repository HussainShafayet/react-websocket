// src/App.js
import React from "react";
import WebSocketComponent from "./components/WebSocketComponent";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">React WebSocket Demo</h1>
        <WebSocketComponent />
      </div>
    </div>
  );
}

export default App;
