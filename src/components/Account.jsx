import { useStore } from '../context/StoreContext';

function Account() {
  const { user, setModal } = useStore();

  return (
    <section className="page-section">
      <div className="page-section__inner">
        <h1 className="page-section__title">MY ACCOUNT</h1>
        <p className="page-section__subtitle">Manage your profile, preferences, and membership.</p>

        <div className="page-grid">
          <div className="glass-panel">
            <h2 className="glass-panel__title">Profile</h2>
            <div className="profile-row">
              <div className="profile-avatar">{user.initials}</div>
              <div>
                <p className="profile-name">{user.name}</p>
                <p className="profile-email">{user.email}</p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setModal({ type: 'edit-profile' })}
            >
              Edit Profile
            </button>
          </div>

          <div className="glass-panel">
            <h2 className="glass-panel__title">Membership</h2>
            <p className="glass-panel__highlight">VELOCE Elite</p>
            <p className="glass-panel__text">Early access to drops, free express shipping, and exclusive colorways.</p>
            <span className="status-badge">Active</span>
          </div>

          <div className="glass-panel">
            <h2 className="glass-panel__title">Saved Addresses</h2>
            <p className="glass-panel__text">{user.addressLine1}</p>
            <p className="glass-panel__text">{user.addressLine2}</p>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setModal({ type: 'manage-address' })}
            >
              Manage Addresses
            </button>
          </div>

          <div className="glass-panel">
            <h2 className="glass-panel__title">Payment Methods</h2>
            <p className="glass-panel__text">Visa ending in {user.cardLast4}</p>
            <p className="glass-panel__text">Expires {user.cardExpiry}</p>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setModal({ type: 'update-card' })}
            >
              Update Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
