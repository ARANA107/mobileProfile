import React from 'react';
import { PaginationItem } from 'reactstrap';

const Pagination = ({postsPerPage,totalPosts, paginate}) =>{
    const pageNumbers = [];

    for(let i =1; i<= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    return <nav>
        <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>{
                        window.scrollTo(0, 0);
                        paginate(number)}
                        } className="page-link">{number}</a>
                </li>
            ))}
        </ul>
    </nav>
}

export default Pagination;