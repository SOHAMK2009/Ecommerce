import { useStore } from '../context/StoreContext';

function Modal({ onNavigate }) {
  const { modal, closeModal, updateUser, user } = useStore();

  if (!modal) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (modal.type === 'order-detail') {
    const { order } = modal.data;
    return (
      <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
        <div className="modal">
          <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">✕</button>
          <h2 className="modal__title">Order {order.id}</h2>
          <div className="modal__body">
            <img src={order.image} alt={order.item} className="modal__img" />
            <p><strong>Product:</strong> {order.item}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> {order.total}</p>
            <p><strong>Shipping:</strong> Free Express</p>
            <p><strong>Delivery:</strong> {order.status === 'Delivered' ? 'Completed' : 'Expected in 2–4 days'}</p>
          </div>
          <button type="button" className="btn btn--primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  }

  if (modal.type === 'checkout-success') {
    const { total, itemCount } = modal.data;
    return (
      <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
        <div className="modal">
          <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">✕</button>
          <h2 className="modal__title">Order Placed!</h2>
          <div className="modal__body">
            <p className="modal__success">
              Your order of {itemCount} item{itemCount > 1 ? 's' : ''} for ${total} has been confirmed.
            </p>
            <p>Thank you, {user.name}! You&apos;ll receive a confirmation at {user.email}.</p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              closeModal();
              onNavigate('orders');
            }}
          >
            View Orders
          </button>
        </div>
      </div>
    );
  }

  if (modal.type === 'edit-profile') {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
        <div className="modal">
          <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">✕</button>
          <h2 className="modal__title">Edit Profile</h2>
          <form
            className="modal__form"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              updateUser({
                name: fd.get('name'),
                email: fd.get('email'),
              });
            }}
          >
            <div className="form-group">
              <label htmlFor="edit-name">Name</label>
              <input id="edit-name" name="name" defaultValue={user.name} required />
            </div>
            <div className="form-group">
              <label htmlFor="edit-email">Email</label>
              <input id="edit-email" name="email" type="email" defaultValue={user.email} required />
            </div>
            <button type="submit" className="btn btn--primary">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }

  if (modal.type === 'manage-address') {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
        <div className="modal">
          <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">✕</button>
          <h2 className="modal__title">Manage Addresses</h2>
          <form
            className="modal__form"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              updateUser({
                addressLine1: fd.get('line1'),
                addressLine2: fd.get('line2'),
              });
            }}
          >
            <div className="form-group">
              <label htmlFor="addr-line1">Address Line 1</label>
              <input id="addr-line1" name="line1" defaultValue={user.addressLine1} required />
            </div>
            <div className="form-group">
              <label htmlFor="addr-line2">City, State, ZIP</label>
              <input id="addr-line2" name="line2" defaultValue={user.addressLine2} required />
            </div>
            <button type="submit" className="btn btn--primary">Save Address</button>
          </form>
        </div>
      </div>
    );
  }

  if (modal.type === 'update-card') {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
        <div className="modal">
          <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">✕</button>
          <h2 className="modal__title">Update Card</h2>
          <form
            className="modal__form"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              const cardNum = String(fd.get('cardNumber')).replace(/\s/g, '');
              updateUser({
                cardLast4: cardNum.slice(-4),
                cardExpiry: fd.get('expiry'),
              });
            }}
          >
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <input id="card-number" name="cardNumber" placeholder="1234 5678 9012 3456" maxLength={19} required />
            </div>
            <div className="form-group">
              <label htmlFor="card-expiry">Expiry (MM/YY)</label>
              <input id="card-expiry" name="expiry" placeholder="09/27" defaultValue={user.cardExpiry} required />
            </div>
            <button type="submit" className="btn btn--primary">Update Card</button>
          </form>
        </div>
      </div>
    );
  }

  return null;
}

export default Modal;
