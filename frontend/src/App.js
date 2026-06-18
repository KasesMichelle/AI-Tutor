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
      <CodeEditor
        code={code}
        setCode={setCode}
        language={language}
        setLanguage={setLanguage}
        analyzeCode={analyzeCode}
      />

      <hr />

      <Results result={result} />
    </div>
  );
}

export default App;