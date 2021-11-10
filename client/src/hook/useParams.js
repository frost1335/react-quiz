import { useParams } from "react-router";

export const useParamsHook = () => {
  const params = useParams();

  return [params];
};
