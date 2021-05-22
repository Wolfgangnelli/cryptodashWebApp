import "./index.css";
import Settings from "../Settings";
import AppLayout from "../Components/AppLayout";
import AppBar from "../Components/AppBar";
import AppProvider from "../Containers/AppProvider";
import Content from "../Shared/Content";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
