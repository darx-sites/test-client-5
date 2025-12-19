'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  title?: string;
  description?: string;
}

export default function Newsletter({
  title = 'Stay Updated',
  description = 'Subscribe to our newsletter for exclusive offers and updates'
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-primary-100 mb-8">{description}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              {isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <p className="text-primary-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}