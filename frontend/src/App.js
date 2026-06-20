import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Results from "./components/Results";
import "./App.css";
function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Java");
  const [result, setResult] = useState("");

  const analyzeCode = () => {
    setResult(
      "AI analysis will appear here once the backend is connected."
    );
  };

  return (
    <div className="app">

  <div className="hero">
    <h1>🤖 AI Tutor</h1>
    <p>
      Debug. Learn. Improve.
      <br />
      Paste your code and get AI-powered feedback.
    </p>
  </div>

  <div className="stats">

    <div className="stat-card">
      <h2>4</h2>
      <p>Languages</p>
    </div>

    <div className="stat-card">
      <h2>0</h2>
      <p>Analyses</p>
    </div>

    <div className="stat-card">
      <h2>0</h2>
      <p>Bugs Fixed</p>
    </div>

  </div>

  {/* Existing components go here */}

</div>
  );
}

export default App;