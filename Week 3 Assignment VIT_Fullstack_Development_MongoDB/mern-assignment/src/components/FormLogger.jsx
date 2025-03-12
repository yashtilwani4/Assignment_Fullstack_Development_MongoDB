import { useState } from "react";

const FormLogger = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormLogger;
