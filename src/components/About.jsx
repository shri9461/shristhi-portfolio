import { motion } from 'framer-motion'
import { User, Code, GraduationCap } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '5+', icon: Code },
    { label: 'Certifications', value: '5+', icon: GraduationCap },
  ]

  return (
    <section id="about" className="py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary border-none mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-6 opacity-80">
              I am a passionate Computer Science student with a strong focus on building scalable and user-friendly web applications. My journey in tech started with a curiosity for how things work on the internet, which quickly evolved into a full-blown obsession with modern web technologies.
            </p>
            <p className="text-lg leading-relaxed mb-8 opacity-80">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with fellow developers. I believe in continuous learning and always strive to push the boundaries of what's possible in the browser.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 glass rounded-2xl">
                  <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-xs opacity-60 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video glass rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent" />
              <div className="flex items-center justify-center h-full">
                <Code size={80} className="text-primary opacity-20" />
              </div>
            </div>
            {/* Abstract Shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
