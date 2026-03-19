import { motion } from 'framer-motion'
import { Code2, Database, Layout, Smartphone, Server, Globe } from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout size={24} />, level: '90%', items: ['React', 'Tailwind', 'Next.js'] },
    { name: 'Backend', icon: <Server size={24} />, level: '85%', items: ['Node.js', 'Python', 'Firebase'] },
    { name: 'Database', icon: <Database size={24} />, level: '80%', items: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { name: 'Languages', icon: <Code2 size={24} />, level: '95%', items: ['JavaScript', 'HTML/CSS', 'C++'] },
  ]

  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-3 bg-foreground/5 rounded-2xl border border-border-subtle">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-foreground/5 border border-foreground/5 rounded-full text-sm opacity-70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span className="opacity-60">Mastery</span>
                  <span className="text-primary">{skill.level}</span>
                </div>
                <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
