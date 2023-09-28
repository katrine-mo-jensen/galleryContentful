import { useFetch } from "../../hooks/fetch/useFetch";
import style from "../content/Content.module.scss";


export const Content = () => {
  const { data } = useFetch();

  return (
    <>
      <div>
        {data?.items.map((item, index) => {
          return (
            <header key={index}>
              <h2>{item.fields.galleryTitle}</h2>
              {item.fields.imageGallery?.map((item, index) => {
                return <img className= {style.Images} src={`https:${item.fields.file.url}`} />;
              })}
            </header>
          );
        })}
      </div>
    </>
  );
};
