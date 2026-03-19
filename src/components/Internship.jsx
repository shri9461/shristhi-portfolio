import { motion } from 'framer-motion'
import { Briefcase, Calendar, Star, ChevronRight } from 'lucide-react'

const Internship = () => {
  const highlights = [
    'Led "Generating Awareness on Online Frauds" campaign',
    'Collaborated with educators, school principals & changemakers',
    'Recognized as a Star Management Trainee',
    'Worked under Strategy & Innovation vertical of Teach India',
  ]

  return (
    <section id="internship" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Internship</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — Main card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-300 group"
          >
            {/* Company badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex p-3 bg-foreground/5 rounded-2xl border border-border-subtle group-hover:border-primary/40 transition-colors">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  The Times Group
                </p>
                <p className="text-xs text-foreground/40">Bennett, Coleman &amp; Co. Ltd.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              Star Management Trainee
            </h3>
            <p className="text-foreground/60 font-medium mb-4">
              Strategy &amp; Innovation — Teach India (CSR Programme)
            </p>

            <div className="flex items-center gap-2 text-sm text-foreground/40 mb-8">
              <Calendar size={14} />
              <span>July 2024 – October 2024</span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <ChevronRight
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Story / reflection card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Letter of Recommendation callout */}
            <div className="glass rounded-3xl border border-primary/30 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <span className="text-sm font-semibold text-yellow-400">
                  Letter of Recommendation
                </span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Honored to receive a Letter of Recommendation from{' '}
                <span className="text-white font-semibold">The Times Group</span>{' '}
                – Bennett, Coleman &amp; Co. Ltd., recognizing my work as a{' '}
                <span className="text-primary font-semibold">
                  Star Management Trainee
                </span>{' '}
                under the Strategy and Innovation vertical of Teach India
                (July–October 2024).
              </p>
            </div>

            {/* Reflection paragraph */}
            <div className="glass rounded-3xl border border-foreground/10 p-6">
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                This journey allowed me to lead impactful campaigns like{' '}
                <span className="text-foreground font-semibold italic">
                  "Generating Awareness on Online Frauds"
                </span>
                , collaborate with inspiring educators and changemakers, and grow
                as a professional in a mission-driven environment.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Grateful for the mentorship, opportunities, and trust placed in
                me. Excited to carry forward these learnings into future
                endeavors! 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Internship
