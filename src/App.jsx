import React from "react";

const App = () => {
  let count = 1;
  let name = "";
  function addCount() {
    count = count + 1;
    console.log(`count value is ${count}`);
  }
  function handleInput(e) {
    const value = e.target.value;
    console.log(value);
  }

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={addCount}>ADD COUNT</button>
        <input type="text" value={name} onChange={handleInput} />
        <button>Update name</button>
        {name}
      </div>
    </>
  );
};

export default App;
