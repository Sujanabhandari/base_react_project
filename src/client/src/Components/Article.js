import { useParams, Link, Outlet } from "react-router-dom";

const Article = ({articles}) => {

    const{ id } = useParams();
    console.log(id)
    const clickedArticle = articles?.find((article)=>article.sys.id === id);
    console.log("Robert")

    return(
    <div className ="container" >
        <h1>{clickedArticle?.fields.name}</h1>
        <p><i>Written by </i> {clickedArticle?.fields.author}</p> 
        <img className = "image"src={clickedArticle?.fields.featuredImage.fields.file.url} alt="image"/>
        <p>-Published on {clickedArticle?.fields.time}</p> 
        <p>{clickedArticle?.fields.description} </p>
    </div>
  );
};
      
export default Article;