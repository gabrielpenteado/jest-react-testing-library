import "./App.css";
import Counter from "./components/Counter";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Counter initialCount={0} color="black" />
      <Tasks />
    </div>
  );
}

export default App;
