import { useFetch } from "../../hooks/fetch/useFetch";
import style from "../description/Description.module.scss"

export const Description = () => {
  const { data } = useFetch();

  return (
    <>
    {data?.item.map((item, index) => {
      return(
        <article className={style.description}>

        </article>
      )
    })}
    </>
  );
};
