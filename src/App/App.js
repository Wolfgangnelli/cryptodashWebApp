import "./index.css";
import Settings from "../Settings";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";
import AppProvider from "../Containers/AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
