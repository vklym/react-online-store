import PropTypes from 'prop-types';

export const productPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}).isRequired;