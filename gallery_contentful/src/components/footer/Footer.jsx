import { useFetch } from "../../hooks/fetch/useFetch";

export const Footer = () => {
  const { data } = useFetch();

  return (
    <>
      <h3>Forfatter</h3>
      {data?.items.map((item, index) => {
        return (
          <footer key={index}>
            <p>{item.fields.author}</p>
          </footer>
        );
      })}
    </>
  );
};
