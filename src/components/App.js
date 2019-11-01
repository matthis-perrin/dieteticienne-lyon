import React from "react";
import styles from "./App.module.sass";
import castor from "../images/castor.png";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img className={styles.AppLogo} src={castor} alt="Castor" />
        <p>Salutations !!</p>
      </header>
    </div>
  );
}

export default App;
