import { useHotkeys } from "react-hotkeys-hook";

export const useHotKey = (keyPattern: string, fn: () => any) =>
  useHotkeys(keyPattern, fn, {});

// Scopes allow you to group hotkeys together. You can use scopes to prevent hotkeys from colliding with each other.

// const App = () => {
//   return (
//     <HotkeysProvider initiallyActiveScopes={['settings']}> //This will trigger settings
//
//       <ExampleComponent />
//     </HotkeysProvider>
//   )
// }
