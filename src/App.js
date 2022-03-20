import "./App.css";
import FormContainer from "./components/FormComponent";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import styles for react bootstrap

function App() {
  return (
    <div className="App">
      <h1 className="text-gray-700 font-bold underline">Hello world!</h1> 
      <Navbar />
      <div>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
