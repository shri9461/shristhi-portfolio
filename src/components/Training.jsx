import { motion } from 'framer-motion'
import { Award, Building2, Calendar, BookOpen, ExternalLink } from 'lucide-react'

const Training = () => {
  const trainingData = [
    {
      title: "Certificate of MERIT - Fundamental of Data Structure using C++",
      issuer: "Centre for Professional Enhancement, Lovely Professional University",
      date: "July 2025",
      description: "Successfully completed skill development training focused on core data structure concepts, algorithms, and complexity analysis using C++.",
      highlights: [
        "Core Data Structures (Arrays, Linked Lists, Trees, Graphs)",
        "Algorithm Optimization & Complexity",
        "Problem Solving using C++"
      ]
    }
  ]

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display italic tracking-tight">Professional Training</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {trainingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle accent gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <Award size={40} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary/70 text-sm font-semibold whitespace-nowrap bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/60 mb-6 text-sm font-medium">
                    <Building2 size={16} />
                    {item.issuer}
                  </div>

                  <p className="text-white/70 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {item.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/50 bg-white/5 p-3 rounded-xl border border-white/5">
                        <BookOpen size={16} className="text-secondary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training
