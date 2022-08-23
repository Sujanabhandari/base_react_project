import { useParams, Link, Outlet } from "react-router-dom";

const Author = ( props) => {

    const partialAuthor = props.articles.filter((article) => article.fields.author === props.author);
    
        return (
            <>
                <div className="container">
                    <div className="row">
                        {partialAuthor.map((article, index) =>
                            <div className="col-12 col-md-6 col-lg-4 hover-div b- mb-3" key={index}>
                                <div className="card card-top hover-card m-0">
                                    <img className="card-img-top" src={article.fields.featuredImage.fields.file.url} alt="Bologna" />
                                    <div>
                                        <a href="#" className="btn btn-light btn-sm">{article.fields.blogtype}</a>
                                    </div>
    
                                    <div className="card-body">
                                        <div className="row">
                                            <h4 className="card-title">{article.fields.name}</h4>
                                            <p className="card-text p-height">{article.fields.heading}</p>
                                            <span className="author card-link"><i>Written by </i><a href="#" className="text-decoration-none">{article.fields.author}</a></span> <br />
                                            <Link to={article.sys.id} className="btn btn-info mt-3">Read Blog</Link>  
                                        </div>
                                    </div>
    
                                    <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                        <div className="views">Published on {article.fields.time}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
}
export default Author;