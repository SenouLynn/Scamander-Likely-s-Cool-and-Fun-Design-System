import Router from "./routes/Router";
import { createThemepage } from "./routes/utils/createRoute";
import { baseComponents } from "_components/theme/declarations/_localStyles.manifest";

const localTheme = {
  routes: {
    "/": createThemepage({ route: "/", componentIds: { location: "0" } }),
  },
  field: {
    ...baseComponents,
  },
};

function App() {
  return (
    <div className="App">
      <Router {...localTheme} />
    </div>
  );
}

export default App;
