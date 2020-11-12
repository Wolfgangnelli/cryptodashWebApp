import "./App.css";
import Welcome from "../Components/Welcome";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";

function App() {
  return (
    <AppLayout>
      <AppBar />
      <Welcome name={"Cryptodash"} />
    </AppLayout>
  );
}

export default App;
