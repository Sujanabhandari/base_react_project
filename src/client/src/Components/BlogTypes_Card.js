// import Articles from './Articles';
import { useParams, Link, Outlet } from "react-router-dom";
import { useState } from "react";

const BlogTypes_Card = ({ articles }) => {
    
    const [blog, setBlog] = useState([]);
   
    const { type_name } = useParams();

    const filteredArticles = articles?.filter((article) => article.blogtype === type_name);

    return (
        <>
            <div className="container">
                <div className="row">
                    {filteredArticles?.map((article, index) =>
                        <div className="col-6 hover-div b- mb-3" key={index}>
                            <div className="card card-top hover-card m-0">
                                <img className="card-img-top" src={article.img_path} alt="Bologna" />   
                                <div>
                                    {/* <Link to={article.fields.blogtype} className="btn btn-light">{article.fields.blogtype}</Link> */}
                                    <span>{article.blogtype}</span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <h4 className="card-title">{article.title}</h4>
                                        <p className="card-text p-height">{article.heading}</p>
                                        <span className="author card-link"><i>Written by </i>
                                            <Link to={article.author} className="text-decoration-none">{article.author}</Link>
                                        </span> <br />
                                        
                                        <div>
                                            <Link to={`/articles/${article.id}`} className="btn btn-info mt-3">Read Blog</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">Published on {article.time}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
            
        </>
    )
}
export default BlogTypes_Card;