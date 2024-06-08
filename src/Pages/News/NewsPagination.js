import React from 'react';
import { Link } from 'react-router-dom';

const NewsPagination = () => {
    return (
        <div className="pagination mt-50">
            <ul>
                <li><Link className="active" to="">01</Link>
                </li>
                <li><Link to="">02</Link>
                </li>
                <li><Link to="">03</Link>
                </li>
                <li><Link to=""><i className="far fa-ellipsis-h"></i></Link>
                </li>
                <li><Link to="">08</Link>
                </li>
            </ul>            
        </div>
    );
};

export default NewsPagination;