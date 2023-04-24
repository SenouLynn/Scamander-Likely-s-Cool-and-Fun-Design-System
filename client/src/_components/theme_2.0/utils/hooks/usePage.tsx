import { useLocation, useParams } from "react-router-dom";
export const usePage = (): RouteState => {
  const location = useLocation();
  return location;
};
