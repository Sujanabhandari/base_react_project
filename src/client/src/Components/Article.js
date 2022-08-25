import { useParams, Link, Outlet } from "react-router-dom";

const Article = ({ articles }) => {
  const { id } = useParams();
  const clickedArticle = articles?.find((article) => 
    article.id == id
  );
 
  return (
    <>
      <div className="container" >
          <h1>{clickedArticle?.title}</h1>
          <p><i>Written by </i> {clickedArticle?.author}</p>
          <img className="image" src={clickedArticle?.img_path} alt="image" />
          <p>-Published on {clickedArticle?.time}</p>
          <p>{clickedArticle?.description} </p>
      </div>
    </>
  );
};

export default Article;