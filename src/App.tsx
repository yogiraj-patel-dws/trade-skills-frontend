import "./App.css";
import GlobalNotification from "./components/common/GlobalNotification";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <GlobalNotification />
      <AppRouter />
    </>
  );
}

export default App;
