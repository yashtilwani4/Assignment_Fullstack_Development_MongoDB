import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextUpdater from "./components/TextUpdater.jsx";
import FormLogger from "./components/FormLogger.jsx";
import UserCard from "./components/UserCard.jsx";
import StyledButton from "./components/StyledButton.jsx";
import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">MERN Week 3 Assignments</h1>
      <TextUpdater />
      <FormLogger />
      <UserCard name="John Doe" email="john@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
};

export default App;
