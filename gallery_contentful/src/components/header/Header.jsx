import { useFetch } from "../../hooks/fetch/useFetch";

export const Header = () => {
  const { data } = useFetch();

  return (
    <>
      {data?.items.map((item, index) => {
        return (
          <header key={index}>
            <h1>{item.fields.headerTitle}</h1>
            {item.fields.headerImage && (
              <img src={`https:${item.fields.headerImage.fields.file.url}`} />
            )}
          </header>
        );
      })}
    </>
  );
};
