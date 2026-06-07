import { useStore } from '../context/StoreContext';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop&q=80';

const lookbookImages = [
  {
    src: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=800&fit=crop&q=80',
    caption: 'Street Heat',
  },
  {
    src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=800&fit=crop&q=80',
    caption: 'Night Run',
  },
  {
    src: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=800&fit=crop&q=80',
    caption: 'Luxury Lane',
  },
  {
    src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop&q=80',
    caption: 'Limited Drop',
  },
  {
    src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop&q=80',
    caption: 'Urban Flow',
  },
  {
    src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop&q=80',
    caption: 'Track Ready',
  },
];

function Lookbook() {
  const { lookbookOpen, closeLookbook } = useStore();
  if (!lookbookOpen) return null;

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && closeLookbook()}
      role="dialog"
      aria-modal="true"
      aria-label="Lookbook"
    >
      <div className="modal modal--wide">
        <button type="button" className="modal__close" onClick={closeLookbook} aria-label="Close">
          ✕
        </button>
        <h2 className="modal__title">VELOCE LOOKBOOK</h2>
        <p className="modal__subtitle">Spring / Summer 2025 — Run The Future</p>
        <div className="lookbook-grid">
          {lookbookImages.map((img) => (
            <figure key={img.caption} className="lookbook-item">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lookbook;
