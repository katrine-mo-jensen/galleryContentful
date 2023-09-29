import { useFetch } from "../../hooks/fetch/useFetch";
import style from "../footer/Footer.module.scss";


export const Footer = () => {
  const { data } = useFetch();

  return (
    <>
      <h3 className= {style.footerFont}>Forfatter</h3>
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
