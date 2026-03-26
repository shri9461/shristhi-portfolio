import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      institution: 'Lovely Professional University',
      location: 'Jalandhar, Punjab',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      duration: 'Since Aug’23',
      icon: <GraduationCap size={24} className="text-primary" />,
    },
    {
      institution: 'St. Francis School',
      location: 'Bandikui, Rajasthan',
      degree: 'Intermediate',
      duration: 'Apr ‘21 – Mar’22',
      details: 'Percentage: 80%',
      icon: <School size={24} className="text-secondary" />,
    },
    {
      institution: 'Railway School',
      location: 'Bandikui, Rajasthan',
      degree: 'Matriculation',
      duration: 'Apr’19 – Mar ’20',
      details: 'Percentage: 82%',
      icon: <School size={24} className="text-accent" />,
    },
  ]

  return (
    <section id="education" className="py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-foreground/5 rounded-2xl border border-border-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-medium mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {edu.details && (
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold border border-primary/20">
                      {edu.details}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
