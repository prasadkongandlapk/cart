import React from 'react'

const CartContext = React.createContext({
  totalPrice: 0,
  totalQuantity: 0,

  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  onAddTotalPrice: () => {},
})

export default CartContext
