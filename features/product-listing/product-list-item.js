import React from 'react';

import AddButton from './add-btn';


const ProductListItem = (props) => {
    const product = props.product;
    return (
        <div className="product-list-item">
            <h3>{product.title}</h3>
            <img
                height={100}
                title={product.name}
                src={`/products/${product.image}`} />
            <div>{product.description}</div>
            <div>${product.price}</div>
            <AddButton addToCart={props.addToCart} cartItem={props.cartItem} />
        </div>
    )
}

export default ProductListItem;