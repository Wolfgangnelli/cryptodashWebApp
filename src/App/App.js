import "./App.css";
import Welcome from "../Components/Welcome";
import AppLayout from "./AppLayout";

function App() {
  return (
    <AppLayout>
      <Welcome name={"Cryptodash"} />
    </AppLayout>
  );
}

export default App;
