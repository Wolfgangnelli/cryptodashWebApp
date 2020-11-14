import "./index.css";
import Settings from "../Settings";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";
import { AppProvider } from "../HOC/AppProvider";
import CoinLists from "../Containers/CoinList";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
        <CoinLists />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
