import React from 'react';
import PropTypes from 'prop-types';
import ProductLink from '../../components/ProductLink';
import {productPropTypes} from '../../common/propTypes';

const AdminPage = ({
    productList,
}) => (   
    <div>
        {
            productList.map( ({id, title}) => <ProductLink key={id} id={id} title={title}/>)
        }
    </div>
);

AdminPage.propTypes = {
    productList: PropTypes.arrayOf(productPropTypes).isRequired
}

export default AdminPage;