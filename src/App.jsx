import { useRef, useState } from "react";
import "./App.css";

function App() {
  const refDialog = useRef();

  const onOpen = () => {
    refDialog.current.showModal();
  };

  const onClose = () => {
    refDialog.current.close();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Frieden</h2>
        <dialog ref={refDialog} onClick={onClose}>
          {/* dont propagate clicks on DIV area itself! */}
          <div onClick={(e) => e.stopPropagation()}>
            <h2>Bist du für den Frieden?</h2>
            {/* but still "propagate" clicks on BUTTONS! */}
            <button onClick={onClose}>Bestätige!</button>
            {" "}
            <button onClick={onClose}>Weiß nicht...</button>
          </div>
        </dialog>
        <button onClick={onOpen}>Dialog - Jetzt!</button>
      </header>
    </div>
  );
}

export default App;
