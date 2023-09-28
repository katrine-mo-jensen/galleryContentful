import { useFetch } from "../../hooks/fetch/useFetch";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Description = () => {
  const { data } = useFetch();

  return (
    <>
      {data?.items.map((item, index) => {
        return (
          <section key={index}>
            {documentToReactComponents(item.fields.galleryDescription)}
          </section>
        );
      })}
    </>
  );
};
