import { useEffect, useState } from "react";
import * as contentful from "contentful";

export function useFetch() {
  const [data, setData] = useState(null);

  const client = contentful.createClient({
    space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
    environment: "master",
    accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
  });

  useEffect(() => {
    client
      .getEntries()
      .then((entry) => setData(entry))
      .catch(console.error);
  }, []);

  console.log("Data", data);

  return { data };
}
