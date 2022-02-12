import "./App.css";
import FormContainer from "./components/formContainer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
