import React, { useState } from "react";
import Model from "./Model";
import './../styles/App.css';

const App = () => {

  const [show, setShow] = useState(false);

  function changeShow() {
    setShow(!show);
  }


  return (
    <div className="parent">
      <h1>Parent Component</h1>

      <div className="child">

        <h2>Child Component</h2>
        <button onClick={changeShow}>Show Modal</button>

        {/* show is false : if click !show  === opposite of show i.e true */}
        {show ? <Model /> : null}

      </div>
    </div>
  )

}

export default App;