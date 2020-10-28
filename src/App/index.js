import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar/AppBar";
import AppProvider from "./AppBar/AppProvider";
import Settings from "../Settings/Settings";
import Dashboard from "../Dashboard/Dashboard";
import Content from "../Shared/Content";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Dashboard />
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
