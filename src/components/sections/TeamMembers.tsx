"use client";

import { motion } from "framer-motion";
import { ExternalLink, Crown } from "lucide-react";
import { teamMembers } from "@/data/services";

export function TeamMembers() {
  const founder = teamMembers.find((m) => m.isFounder);
  const otherMembers = teamMembers.filter((m) => !m.isFounder);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results.
          </p>
        </div>

        {/* Founder card - centered above all members */}
        {founder && (
          <div className="flex justify-center mb-16">
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative text-center w-full max-w-xs"
            >
              {/* Animated border glow */}
              <>
                <motion.div
                  className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-primary-500 via-accent-purple to-primary-500 opacity-75 blur-sm"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                <motion.div
                  className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-primary-500 via-accent-purple to-primary-500 opacity-50"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
              </>

              <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                {/* Crown icon */}
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="w-6 h-6 text-amber-500 fill-amber-500" />
                </motion.div>

                {founder.image ? (
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-300 dark:ring-primary-700 shadow-xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                ) : (
                  <div
                    className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-4xl font-bold mb-4 ring-4 ring-primary-300 dark:ring-primary-700`}
                  >
                    {founder.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {founder.bio}
                </p>
                {founder.portfolioLink && (
                  <a
                    href={founder.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-all hover:shadow-button hover:-translate-y-0.5"
                  >
                    View Portfolio <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Other team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl font-bold mb-4`}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}