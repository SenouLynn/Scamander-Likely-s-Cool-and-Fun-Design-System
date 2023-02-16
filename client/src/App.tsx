// import { Container } from "jb-s-cool-and-fun-components";
import ComponentWrapper from "./components/controlPanel/ComponentWrapper";
import { Container } from "./components/Container";
import ThemeWrapper, { ThemeContext } from "./components/theme/ThemeContext";
import { Navbar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";

function App() {
  return (
    <div className="App">
      <ThemeWrapper>
        <Container className={"page"}>
          <Navbar className="container">
            <NavItem role="item" className="h-4rem">
              Home
            </NavItem>
            <NavItem role="item" className="h-4rem">
              About
            </NavItem>
          </Navbar>
        </Container>
      </ThemeWrapper>
    </div>
  );
}

export default App;
