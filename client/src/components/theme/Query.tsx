import axios from "axios";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createRoute } from "./query/routes";

const queryClient = new QueryClient();

async function fetchNotes() {
  let data = {};
  await fetch(createRoute("getDefaultStyles")).then((response) =>
    response.json().then((res) => (data = res))
  );
  return data;
}
function Example() {
  const { isLoading, error, data, isFetching } = useQuery(
    "repoData",
    // axios.get("//http:localhost:8000/api/greetings").then((res) => res.data)
    fetchNotes
  );
  const [t, setData] = useState({});
  useEffect(() => {
    const data: any = fetchNotes().then((data) => setData(data));
  }, []);
  console.log(t);
  //   console.log(fetchNotes());

  //   if (isLoading) return "Loading...";

  //   if (error) throw new Error("An error has occurred: " + error.message);

  return (
    <div>
      {/* <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div> */}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default function Query() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
