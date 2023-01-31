import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const addLike = () => {
    setCounter(counter + 1);
  };
  let like = "asdfg";
  if (counter === 1) {
    like = "like";
  } else {
    like = "likes";
  }

  return (
    <button onClick={addLike}>
      {counter} {like}
    </button>
  );
}

export default App;
