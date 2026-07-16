"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-card"
            >
              <Quote className="w-12 h-12 text-primary-200 dark:text-primary-700 mb-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-900 dark:text-white mb-8 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.id === "1" ? "from-primary-600 to-accent-purple" : testimonial.id === "2" ? "from-red-500 to-rose-600" : testimonial.id === "3" ? "from-emerald-500 to-teal-600" : testimonial.id === "4" ? "from-blue-500 to-indigo-600" : testimonial.id === "5" ? "from-amber-500 to-orange-600" : "from-purple-500 to-pink-600"} flex items-center justify-center text-white text-xl font-bold`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                  <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? "bg-primary-600 w-6"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}