import { useStore } from '../context/StoreContext';

function Cart({ onNavigate }) {
  const { cart, removeFromCart, checkout } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = cart.length > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <section className="page-section">
      <div className="page-section__inner">
        <h1 className="page-section__title">YOUR CART</h1>
        <p className="page-section__subtitle">
          {cart.length === 0
            ? 'Your cart is empty — head back and add some kicks!'
            : `${cart.length} item${cart.length > 1 ? 's' : ''} ready to checkout.`}
        </p>

        {cart.length === 0 ? (
          <div className="empty-state glass-panel">
            <p>No items in your cart yet.</p>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('home')}>
              Shop Now
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article key={item.lineId} className="glass-panel cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__img"
                    loading="lazy"
                  />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__meta">
                      Size {item.size} · <span className="cart-item__tag">{item.tag}</span>
                    </p>
                  </div>
                  <p className="cart-item__price">${item.price}</p>
                  <button
                    type="button"
                    className="cart-item__remove"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFromCart(item.lineId)}
                  >
                    ✕
                  </button>
                </article>
              ))}
            </div>

            <aside className="glass-panel cart-summary">
              <h2 className="glass-panel__title">Order Summary</h2>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button type="button" className="btn btn--primary btn--full" onClick={checkout}>
                Checkout
              </button>
              <p className="cart-summary__note">Free express shipping for VELOCE Elite members.</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
