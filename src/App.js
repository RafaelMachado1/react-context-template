import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";
import Router from "./routes/Router";

export default function App() {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}
