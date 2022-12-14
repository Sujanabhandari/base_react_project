
import { NavLink, Routes, Route, Link } from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown';

const Categories = ({navItems}) => {
    
    const {authors, blogTypes} = navItems;
   
    return (
            // <div className="container-fluid">
            <div className="row">
                  <div className="col-12">   
                        <Dropdown>
                            <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                Blog Types
                            </Dropdown.Toggle>
                            <Dropdown.Menu menuvariant="Info">
                                {blogTypes?.map((blogtype, index) => 
                                    <Dropdown.Item href={`/blogtypes/${blogtype}`} key={index}>{blogtype}</Dropdown.Item>
                                )}
                            
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                Authors
                            </Dropdown.Toggle>
                            <Dropdown.Menu menuvariant="Info">
                                {authors?.map((author, index) => 
                                    <Dropdown.Item href={`/authors/${author}`} key={index}>{author}</Dropdown.Item>
                                    // <Dropdown.Item key={index}><p><Link className="text-decoration-none text-dark" to={`/authors/${author}`}>{author}</Link></p></Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>
    

    )
}
export default Categories;