import "./index.css";
import Settings from "../Settings";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";
import AppProvider from "../Containers/AppProvider";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
