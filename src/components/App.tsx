import { useState, useEffect } from "react";

const App = () => {
  const [is_mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

export default App;
