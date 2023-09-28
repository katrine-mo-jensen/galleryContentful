import { useFetch } from "../../hooks/fetch/useFetch";
import style from "../header/Header.module.scss";


export const Header = () => {
  const { data } = useFetch();

  return (
    <>
      {data?.items.map((item, index) => {
        return (
          <header key={index}>
            <h1>{item.fields.headerTitle}</h1>
            {item.fields.headerImage && (
              <img className= {style.HeaderImg} src={`https:${item.fields.headerImage.fields.file.url}`} />
            )}
          </header> 
        );
      })}
    </>
  );
};
