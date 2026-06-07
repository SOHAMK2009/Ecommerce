const testimonials = [
  {
    id: 1,
    quote:
      'The Apex Pro changed my marathon PR. Lightweight, responsive, and absolutely stunning on the track.',
    name: 'Marcus Chen',
    initials: 'MC',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Finally a sneaker that looks as fast as it feels. VELOCE nailed the luxury street aesthetic.',
    name: 'Sofia Reyes',
    initials: 'SR',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Premium materials, insane comfort. These are the only kicks I reach for — day or night.',
    name: 'James Okonkwo',
    initials: 'JO',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <h2 className="section-title">LOVED BY RUNNERS</h2>
        <div className="testimonials__scroll">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-card__stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <blockquote className="testimonial-card__quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <span className="testimonial-card__name">{item.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
