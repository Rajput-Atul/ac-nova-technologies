"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-card transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all">
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}