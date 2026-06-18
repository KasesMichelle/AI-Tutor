function CodeEditor({ code, setCode, language, setLanguage, analyzeCode }) {
  return (
    <div>
      <h2>AI Coding Tutor</h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="PHP">PHP</option>
      </select>

      <br /><br />

      <textarea
        rows="15"
        cols="80"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />

      <br /><br />

      <button onClick={analyzeCode}>
        Analyze Code
      </button>
    </div>
  );
}

export default CodeEditor;