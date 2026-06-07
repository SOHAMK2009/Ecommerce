import { products } from '../data/products';
import { useStore } from '../context/StoreContext';

const categoryLabels = {
  running: 'Running',
  street: 'Street',
  luxury: 'Luxury',
  limited: 'Limited',
};

function ProductCards() {
  const { activeCategory, addToCart, setActiveCategory } = useStore();

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <section className="products" id="products">
      <div className="products__inner">
        <h2 className="section-title">
          {activeCategory ? `${categoryLabels[activeCategory].toUpperCase()} COLLECTION` : 'DROP OF THE WEEK'}
        </h2>
        {activeCategory && (
          <button type="button" className="filter-clear" onClick={() => setActiveCategory(null)}>
            ← Show All Products
          </button>
        )}
        <div className="products__grid">
          {filtered.map((product, index) => (
            <article
              key={product.id}
              className="product-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-card__image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__img"
                  loading="lazy"
                />
                <span className={`product-card__tag ${product.tagClass}`}>
                  {product.tag}
                </span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__price">{product.priceDisplay}</p>
                <button
                  type="button"
                  className="btn btn--cart"
                  disabled={product.soldOut}
                  onClick={() => addToCart(product)}
                >
                  {product.soldOut ? 'Sold Out' : 'Add to Cart'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCards;
