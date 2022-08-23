// import Articles from './Articles';
import { useParams, Link, Outlet } from "react-router-dom";

const Blogs = ({ articles }) => {
    const { blogtype } = useParams();

    console.log(blogtype);
    const clickedArticle = articles?.find((article) => article.fields.blogtype === blogtype);
    console.log(clickedArticle)
    return (
        <>

        </>
    )
}
export default Blogs;