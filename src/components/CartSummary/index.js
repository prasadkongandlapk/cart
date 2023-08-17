import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {totalPrice, totalQuantity} = value

      return (
        <div className="cart-summary-bg-bg">
          <div className="cart-summary-bg">
            <p className="order-total">
              Order Total:
              <span className="price-bold">Rs {totalPrice} /-</span>
            </p>
            <p className="order-total">{totalQuantity} items in cart</p>
            <button className="check-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
