import React from "react";
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary/20 rounded-lg p-6 gradient-border"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-primary font-medium">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;