import { useQuery } from "@tanstack/react-query";

const useFetch = (url) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["data", url], // Unique key based on the URL
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  return { isPending, isError, data, error };
};

export default useFetch;
