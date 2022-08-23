import { NavLink, Routes, Route, Link} from "react-router-dom";
// import Nav from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


const Nav = ({navItems}) => {

    const {authors, blogTypes} = navItems;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="authors">Authors</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="blogtypes">Blog Types</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="articles">Articles</Link>

                    </li> 
                    {/* <DropdownBlog articles={articles}/> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="Info" id="dropdown-basic">
                            Blog Types
                        </Dropdown.Toggle>
                        <Dropdown.Menu menuVariant="Info">
                            {blogTypes?.map(blogType => 
                                <Dropdown.Item href={`/blogtypes/${blogType}`}>{blogType}</Dropdown.Item>
                            )}
                            {/* {blogTypes?.map((blogType) => 
                                <Dropdown.Item><p><Link className="text-decoration-none text-dark" to={`/blogtypes/${blogType}`}>{blogType}</Link></p></Dropdown.Item>
                            )} */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="Info" id="dropdown-basic">
                            Authors
                        </Dropdown.Toggle>
                        <Dropdown.Menu menuVariant="Info">
                            {/* {authors?.map(author => 
                            <Dropdown.Item href={`/authors/${author}`}>{author}</Dropdown.Item>)} */}
                            {authors?.map((author) => 
                                <Dropdown.Item><p><Link className="text-decoration-none text-dark" to={`/authors/${author}`}>{author}</Link></p></Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>

            </div>
        </div>
    </nav>
    )
}
export default Nav;