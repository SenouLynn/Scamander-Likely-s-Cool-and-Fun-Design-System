import { useContext, useState } from "react";
import Components from "../../components/_localComponents.manifest";
import { ThemeContext } from "../../components/theme/ThemeContext";
import WrapperOptions from "./components/WrapperOptions";

export default function ComponentControls(props: ComponentPackage) {
  const { setOpenComponents } = useContext(ThemeContext);
  const [componentPackage, setComponentPackage] = useState(props);

  return (
    <div onDoubleClick={() => setOpenComponents({})}>
      <Components.Container
        display="flex"
        margin={"md"}
        className="flex-start-start flex-column"
      >
        <div>
          <h4>Custom: {componentPackage.label}</h4>
          <WrapperOptions
            componentPackage={componentPackage}
            setComponentPackage={setComponentPackage}
          />
        </div>
      </Components.Container>
    </div>
  );
}
