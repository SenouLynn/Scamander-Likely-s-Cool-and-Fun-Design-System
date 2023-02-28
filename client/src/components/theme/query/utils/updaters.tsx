export const updateDb = async (
  route: String,
  payload: AtLeast<ComponentPackage, "componentId">
) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  const response = await fetch(
    "http://localhost:8000/api/updateStyle",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
};
