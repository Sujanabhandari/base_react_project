// import Articles from './Articles';
import { useParams, Link, Outlet } from "react-router-dom";
import { useState } from "react";

const BlogTypes = ({ articles }) => {

    const filteredTypes = (articles) => {
        const blog_types = articles.map(article => article.blogtype)
        const uniqueTypes = [...new Set(blog_types)]
        return uniqueTypes;
    }
    const uniqueTypes = filteredTypes(articles)
    
    //  console.log("HEREEE",filterAuthors(articles))

    return (
        <>
            {uniqueTypes.map((blogtype, index) => 
                <p key="index"><Link to={blogtype}>{blogtype}</Link></p>
            )}
            {/* {mapper} */}
            
        </>
    )
}
export default BlogTypes;