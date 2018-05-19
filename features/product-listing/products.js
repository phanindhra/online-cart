import React from 'react';
import { connect } from 'react-redux';

import ProductListItem from './product-list-item';
import { AddToCart, RemoveFromCart } from '../cart/cart-actions';

const Products = (props) => {
    return (
        <div className="product-listing">
            {
                props.products.map((product) => <ProductListItem
                    product={product}
                    addToCart={props.AddToCart}
                    removeFromCart={props.RemoveFromCart}
                    cartItem={props.cart && props.cart.find(item => item.id === product.id)} />)
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return { cart: state.cart }
}
const mapDispatchToProps = (dispatch) => { AddToCart, RemoveFromCart }

export default connect(mapStateToProps, { AddToCart, RemoveFromCart })(Products);