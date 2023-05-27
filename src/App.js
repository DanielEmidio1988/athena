import Router from "./router/Router";
import { GlobalContext } from "./context/GlobalContext";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./context/GlobalState";

function App() {
  const context = GlobalState()

  return (
    <>
    <GlobalStyled/>
      <GlobalContext.Provider value={context}>
          <Router/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
