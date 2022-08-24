import { useParams, Link, Outlet } from "react-router-dom";

const Articles = ({ articles }) => {
    console.log("From component", articles)
    return (
        <>
            <div className="container">
                <div className="row">
                    {articles?.map((article, index) =>
                        <div className="col-12 col-md-6 col-lg-4 hover-div b- mb-3" key={index}>
                            <div className="card card-top hover-card m-0">
                                {/* <img className="card-img-top" src={article.fields.featuredImage.fields.file.url} alt="Bologna" /> */}
                                <div>
                                    <a href={`/blogtypes/${article.blogtype}`} className="btn btn-light btn-sm">{article.blogtype}</a>
                                    {/* <Link to={`/articles/${article.id}`} className="btn btn-info mt-3">Read Blog</Link> */}
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <h4 className="card-title">{article.title}</h4>
                                        <p className="card-text p-height">{article.heading}</p>
                                        <span className="author card-link"><i>Written by </i>
                                            <Link to={`/authors/${article.author}`} className="text-decoration-none">{article.author}</Link>
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
export default Articles;