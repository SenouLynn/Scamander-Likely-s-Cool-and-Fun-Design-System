// import { Container } from "jb-s-cool-and-fun-components";
import { Navbar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";
import ThemeWrapper from "./components/theme/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeWrapper>
        <Navbar border={true} className="border">
          <NavItem role="item" className="h-4rem">
            Home
          </NavItem>
          <NavItem role="item" className="h-4rem">
            About
          </NavItem>
        </Navbar>
      </ThemeWrapper>
    </div>
  );
}

export default App;
