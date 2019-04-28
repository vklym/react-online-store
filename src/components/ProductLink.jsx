import React from 'react';
import T from 'prop-types';
import {routes} from '../routes';
import {Link} from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';

const ProductLink = ({id, title}) =>{
    return (
        <div>
           <Link to={formatRoute(routes.adminProduct, { id })}>{title}</Link>
        </div>
)};
ProductLink.propTypes = {
    id: T.number.isRequired,
    title: T.string.isRequired,
};
export default ProductLink;