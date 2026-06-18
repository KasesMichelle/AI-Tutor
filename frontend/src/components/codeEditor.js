import Editor from "@monaco-editor/react";

function CodeEditor({
  code,
  setCode,
  language,
  setLanguage,
  analyzeCode
}) {

  const getLanguage = () => {
    switch(language) {
      case "Java":
        return "java";
      case "Python":
        return "python";
      case "JavaScript":
        return "javascript";
      case "PHP":
        return "php";
      default:
        return "java";
    }
  };

  return (
    <div>
      <h2>AI Coding Tutor</h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>Java</option>
        <option>Python</option>
        <option>JavaScript</option>
        <option>PHP</option>
      </select>

      <br /><br />

      <Editor
        height="500px"
        theme="vs-dark"
        language={getLanguage()}
        value={code}
        onChange={(value) => setCode(value)}
      />

      <br />

      <button onClick={analyzeCode}>
        Analyze Code
      </button>
    </div>
  );
}

export default CodeEditor;