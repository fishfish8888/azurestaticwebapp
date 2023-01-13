import logo from "../images/gatsby-icon.png";
import "../components/App.css";
import { useEffect } from "react";
import Form from "../components/Form";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="py-6">
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
