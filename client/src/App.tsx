// import { Container } from "jb-s-cool-and-fun-components";
import ComponentWrapper from "./components/controlPanel/ComponentWrapper";
import { Container } from "./components/Container";
import ThemeWrapper, { ThemeContext } from "./components/theme/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeWrapper>
        <Container className={"page"}>
          <Container component={"nav"} display="flex">
            Ayo
          </Container>
        </Container>
      </ThemeWrapper>
    </div>
  );
}

export default App;
