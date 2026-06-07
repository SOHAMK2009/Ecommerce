import { orders } from '../data/products';
import { useStore } from '../context/StoreContext';

function Orders() {
  const { setModal } = useStore();

  return (
    <section className="page-section">
      <div className="page-section__inner">
        <h1 className="page-section__title">MY ORDERS</h1>
        <p className="page-section__subtitle">Track purchases and view order history.</p>

        <div className="orders-list">
          {orders.map((order) => (
            <article key={order.id} className="glass-panel order-card">
              <div className="order-card__header">
                <div>
                  <p className="order-card__id">{order.id}</p>
                  <p className="order-card__date">{order.date}</p>
                </div>
                <span className={`status-badge${order.status === 'In Transit' ? ' status-badge--orange' : ''}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-card__body">
                <img
                  src={order.image}
                  alt={order.item}
                  className="order-card__img"
                  loading="lazy"
                />
                <div>
                  <p className="order-card__item">{order.item}</p>
                  <p className="order-card__total">{order.total}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => setModal({ type: 'order-detail', data: { order } })}
              >
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orders;
