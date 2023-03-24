import ThemeWrapper from "./components/theme/ThemeContext";
import Router from "./routes/Router";
function App() {
  return (
    <div className="App">
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
    </div>
  );
}

export default App;
