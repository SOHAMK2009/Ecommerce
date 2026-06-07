import { useStore } from '../context/StoreContext';

function Hero() {
  const { scrollToProducts, openLookbook } = useStore();

  return (
    <section id="home" className="hero">
      <div className="hero__orbs" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Premium Performance Footwear</p>
        <h1 className="hero__title">RUN THE FUTURE</h1>
        <p className="hero__subtitle">
          Engineered for speed. Crafted for the streets. Discover the next generation
          of luxury sneakers built to move with you.
        </p>
        <div className="hero__cta">
          <button type="button" className="btn btn--primary" onClick={scrollToProducts}>
            Shop Now
          </button>
          <button type="button" className="btn btn--ghost" onClick={openLookbook}>
            View Lookbook
          </button>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__sneaker-wrapper">
          <div className="hero__sneaker-blur" aria-hidden="true" />
          <svg
            className="hero__sneaker"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Premium sneaker illustration"
          >
            <defs>
              <linearGradient id="sneakerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4d1c" />
                <stop offset="50%" stopColor="#f0e6d3" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
              <linearGradient id="soleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#333" />
                <stop offset="100%" stopColor="#555" />
              </linearGradient>
            </defs>
            <ellipse cx="200" cy="170" rx="160" ry="18" fill="rgba(255,77,28,0.15)" />
            <path
              d="M60 130 Q80 90 140 85 Q200 80 280 90 Q340 100 350 130 Q340 145 280 150 Q200 155 120 148 Q70 140 60 130Z"
              fill="url(#sneakerGrad)"
              stroke="#ff4d1c"
              strokeWidth="2"
            />
            <path
              d="M100 95 Q150 75 200 72 Q250 75 300 88"
              fill="none"
              stroke="#f0e6d3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M70 130 Q120 138 200 140 Q280 138 340 128"
              fill="url(#soleGrad)"
              stroke="#666"
              strokeWidth="1.5"
            />
            <circle cx="130" cy="110" r="6" fill="#ff4d1c" opacity="0.8" />
            <circle cx="200" cy="105" r="6" fill="#ff4d1c" opacity="0.8" />
            <circle cx="270" cy="110" r="6" fill="#ff4d1c" opacity="0.8" />
            <path
              d="M160 85 L175 60 L210 58 L230 82"
              fill="none"
              stroke="#f0e6d3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="185" y="125" fill="#0a0a0a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
              V
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
