import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "../pages/chat"; // Renamed your component

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/:type?" element={<ChatPage />} />
      <Route path="/:type?/:id?" element={<ChatPage />} />
      <Route path="/:type?/:id?/:channel?" element={<ChatPage />} />
    </Routes>
  );
};

export default Router;