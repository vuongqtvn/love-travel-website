import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useQuery = () => {
  const [search, setSearch] = useSearchParams();
  const query = useMemo(
    () => Object.fromEntries(new URLSearchParams(search)),
    [search]
  );

  return [query, setSearch];
};

export default useQuery;
