import "./App.css";
import Welcome from "../Components/Welcome";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";
import { AppProvider } from "../HOC/AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Welcome name={"Cryptodash"} />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
