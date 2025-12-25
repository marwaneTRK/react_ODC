import { useState } from "react";
import HomePage from "./component/HomePage";
function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="h-screen w-screen flex flex-col gap-6 p-6">
      <HomePage query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
