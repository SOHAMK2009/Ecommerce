import { useState } from 'react';
import { useStore } from '../context/StoreContext';

function Contact() {
  const { user, showToast } = useStore();
  const [sent, setSent] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name');
    const message = fd.get('message');
    if (!name || !message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    setSent(true);
    showToast('Message sent! We\'ll get back to you within 24 hours.');
    setFormKey((k) => k + 1);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="page-section">
      <div className="page-section__inner">
        <h1 className="page-section__title">CONTACT US</h1>
        <p className="page-section__subtitle">Questions about orders, sizing, or collaborations? We&apos;re here.</p>

        {sent && (
          <div className="contact-success glass-panel">
            Message sent successfully! We&apos;ll reply to your email soon.
          </div>
        )}

        <div className="contact-layout">
          <form key={formKey} className="glass-panel contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" defaultValue={user.name} placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user.email}
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option>Order Support</option>
                <option>Sizing Help</option>
                <option>Returns</option>
                <option>Partnerships</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help?" required />
            </div>
            <button type="submit" className="btn btn--primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="glass-panel">
              <h2 className="glass-panel__title">Customer Support</h2>
              <p className="glass-panel__text">support@veloce.com</p>
              <p className="glass-panel__text">Mon–Fri, 9am–6pm PST</p>
            </div>
            <div className="glass-panel">
              <h2 className="glass-panel__title">Flagship Store</h2>
              <p className="glass-panel__text">1200 Velocity Blvd</p>
              <p className="glass-panel__text">Los Angeles, CA 90015</p>
            </div>
            <div className="glass-panel">
              <h2 className="glass-panel__title">Follow Us</h2>
              <div className="footer__social">
                <a href="#instagram" aria-label="Instagram">📸</a>
                <a href="#twitter" aria-label="Twitter">🐦</a>
                <a href="#tiktok" aria-label="TikTok">🎵</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
