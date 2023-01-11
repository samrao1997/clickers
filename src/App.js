import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ButtonPage from "./ButtonPage";
import Login from "./Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Clickers</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
