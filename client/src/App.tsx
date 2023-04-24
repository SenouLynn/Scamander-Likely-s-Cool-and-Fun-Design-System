import { createComponentPackage } from "./_components/_theme/utils/helpers";
import Router from "./routes/Router";
import { createThemepage } from "./routes/utils/createRoute";

function App() {
  const localTheme = {
    routes: {
      "/": createThemepage({ route: "/", componentIds: { location: "0" } }),
    },
    themeField: {
      "0": createComponentPackage({
        pack: { location: "0" },
      }),
    },
  };
  return (
    <div className="App">
      <Router {...localTheme} />
    </div>
  );
}

export default App;
