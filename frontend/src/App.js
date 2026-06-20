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
        <h1>🤖 CodeMentor AI</h1>
        <p>
          Find bugs, understand code, and learn faster with AI.
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

      <div className="main-content">

        <div className="card">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            analyzeCode={analyzeCode}
          />
        </div>

        <div className="card results">
          <Results result={result} />
        </div>

      </div>

    </div>
  );
}

export default App;