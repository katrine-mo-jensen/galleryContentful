import { useFetch } from "../../hooks/fetch/useFetch";

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
                return (
                  <div key={index}>
                    <img src={`https:${item.fields.file.url}`} />
                    <p>{item.fields.description}</p>
                  </div>
                )
                
              })}
            </header>
          );
        })}
      </div>
    </>
  );
};
