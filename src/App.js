import "./App.css";
import Card from "./components/Card/Card";
import States from "./components/States/States";
import Form from "./components/Form/Form";
import Hook from "./components/Hook/Hook";
import Lifecycle from "./components/Lifecycle/Lifecycle";

// function App() {
//   return <Hello name="Nazokat" />;
// }
function App() {
  return (
    <div>
      <Card />
      <States />
      <Form />
      <Hook />
      <Lifecycle number="5" />
    </div>
  );
}

export default App;
