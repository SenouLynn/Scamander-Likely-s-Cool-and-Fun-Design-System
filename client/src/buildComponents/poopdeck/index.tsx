import { useState, createContext, useContext } from "react";
import {
  createAsteroidBelt,
  createComponentPackage,
} from "../../components/theme/utils/helpers";
import { ThemeContext } from "../../components/theme/ThemeContext";

import ComponentMetaData from "./new_components/ComponentMetaData";
import ComponentShowcase from "./new_components/ComponentShowcase";
import ComponentStyles from "./new_components/ComponentStyles";
import SaveComponent from "./new_components/SaveComponent";

export const PoopDeck = () => {
  const { setComponentList, componentList } = useContext(ThemeContext);
  const [newComponent, setNewComponent] =
    useState<ComponentPackage | null>(null);
  const [toggleComponentSelect, setToggleComponentSelect] = useState(false);

  const addNewComponent = (newComponent?: ComponentPackage) => {
    setNewComponent(
      createComponentPackage({
        props: {},
        pack: {
          label: "Test Component",
          children: "text",
          location: "0",
          onClick: () => window.alert("clicked"),
          styles: {
            className: "border",
          },
          ...newComponent,
        },
      })
    );
  };

  const updateNewComponent = (newComponent: ComponentPackage) => {
    setNewComponent(newComponent);
  };
  const saveNewComponent = () => {
    newComponent && setComponentList(newComponent);
  };

  //TODO: Build tree
  //Show Tree and Click to Node to bring up component specs
  //Start with parent
  //Generate Field with parent and children
  //Render component
  // Reference children in Tree
  //Pass click handler to focus child

  const value = {
    newComponent,
    updateNewComponent,
    saveNewComponent,
  };
  return (
    <PoopDeckContext.Provider value={value}>
      <div className="h-min-100vh h-100 w-min-100vw w-100">
        <div className="display-flex flex-row h-100 flex-gap-1">
          <div className="flex-grow-1 w-max-40vw">
            <h1>Build components</h1>
            <div className="w-100 border padding-sm">
              <div className="flex-between-center">
                <div>Toolbar</div>
                <div>
                  <button onClick={() => addNewComponent()}>
                    Build new Component
                  </button>
                  {toggleComponentSelect ? (
                    <select
                      onChange={(e) =>
                        componentList[e.target.value] &&
                        addNewComponent(
                          createComponentPackage({
                            props: {},
                            pack: componentList[e.target.value],
                          })
                        )
                      }
                    >
                      <option>Choose Component:</option>
                      {Object.values(componentList).map((component) => {
                        return (
                          <option value={component.componentId}>
                            {component.label}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <button
                      onClick={() =>
                        setToggleComponentSelect(!toggleComponentSelect)
                      }
                    >
                      Import Component
                    </button>
                  )}
                </div>
              </div>
              <ComponentMetaData />
              <ComponentStyles />
              <SaveComponent />
            </div>
          </div>
          <div className="flex-grow-2">
            <ComponentShowcase />
          </div>
        </div>
      </div>
    </PoopDeckContext.Provider>
  );
};

export const PoopDeckContext = createContext<PoopDeckContextType>({
  newComponent: null,
  updateNewComponent: () => {},
  saveNewComponent: () => {},
});

type PoopDeckContextType = {
  newComponent: ComponentPackage | null;
  updateNewComponent: (newComponent: ComponentPackage) => void;
  saveNewComponent: () => void;
};
