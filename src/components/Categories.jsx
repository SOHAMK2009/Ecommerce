import { useStore } from '../context/StoreContext';

const categories = [
  {
    id: 'running',
    name: 'Running',
    gradient: 'linear-gradient(135deg, #ff4d1c 0%, #ff8a5c 50%, #1a0a00 100%)',
  },
  {
    id: 'street',
    name: 'Street',
    gradient: 'linear-gradient(135deg, #2a1a3a 0%, #ff4d1c 60%, #0a0a0a 100%)',
  },
  {
    id: 'luxury',
    name: 'Luxury',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #c9a96e 50%, #0a0a0a 100%)',
  },
  {
    id: 'limited',
    name: 'Limited',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #ff4d1c 40%, #330a00 100%)',
  },
];

function Categories() {
  const { activeCategory, selectCategory } = useStore();

  return (
    <section className="categories" id="categories">
      <div className="categories__inner">
        <h2 className="section-title">SHOP BY VIBE</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-card${activeCategory === cat.id ? ' category-card--active' : ''}`}
              style={{ '--card-gradient': cat.gradient }}
              onClick={() => selectCategory(cat.id)}
            >
              <span className="category-card__blur" aria-hidden="true" />
              <span className="category-card__name">{cat.name}</span>
              <span className="category-card__arrow" aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
