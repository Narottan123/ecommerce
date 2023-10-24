import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import Homepage from "./Customer/Pages/Homepage/Homepage";

function App() {
  return (
    <div className="text-3xl">
      <Navigation />
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
