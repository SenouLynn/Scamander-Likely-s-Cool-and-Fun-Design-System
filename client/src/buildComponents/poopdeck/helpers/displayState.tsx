export const updateZoomLevel = (updater: "add" | "sub", original: number) : number=> {
  let zoomLevel = original;
  if (updater === "add") {
    if (zoomLevel < 7) zoomLevel += 1;
  } else {
    if (zoomLevel > -7) zoomLevel -= 1;
  }
  return zoomLevel;
};
