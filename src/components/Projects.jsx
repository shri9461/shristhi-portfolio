import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import marksAnalyzerImg from '../assets/marks_analyzer.png'
import netMonImg from '../assets/netMon.png'

const Projects = () => {
  const projects = [
    {
      title: 'Student Marks Analyzer',
      description: [
        'Built a program to analyze student marks using functions, arrays, pointers, sorting, and basic DSA concepts.',
        'Implemented DSA concepts to improve accuracy and performance in marks analysis.',
        'Calculated key statistics — highest, lowest, and average marks — for a clear performance summary.',
        'Tech: C++, arrays, functions, pointers, sorting algorithms, and basic data structures.',
      ],
      tech: ['C++', 'DSA', 'Algorithms'],
      image: marksAnalyzerImg,
      github: 'https://github.com/shri9461/studentMarksanalayzer',
      demo: 'https://www.linkedin.com/posts/shristhi-sethi-043772289_cplusplus-dsa-coding-activity-7348651171277914115-_nfc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYO6LMBrgQDuQvb2f24Rx81y5rcdTGFKg0'
    },

    {
      title: 'Online Furniture Store',
      description: [
        'Built an Online Furniture Store with product catalog, cart system, and responsive design.',
        'Implemented product detail pages for an enhanced browsing experience.',
        'Developed a session-based shopping cart allowing users to add, remove, and manage items.',
        'Designed a fully responsive interface using HTML, CSS, Tailwind CSS, and PHP.',
      ],
      tech: ['HTML', 'CSS', 'Tailwind CSS', 'PHP'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', // Furniture/Ecommerce image
      github: '',
      demo: 'https://surl.lu/usxvty'
    },
    {
      title: 'NetMon - Network Dashboard',
      description: [
        'Designed and developed a full-stack network monitoring dashboard to track device status, network activity, and performance metrics in real time.',
        'Built an interactive UI to visualize network data through charts, graphs, and status indicators.',
        'Implemented real-time monitoring features to detect network issues quickly and improve response time.',
        'Developed backend logic to collect, process, and display network performance data efficiently.',
      ],
      tech: ['ReactJS', 'Node.js', 'Python'],
      image: netMonImg,
      github: 'https://github.com/shri9461/NetMon',
      demo: 'https://www.linkedin.com/posts/shristhi-sethi-043772289_networkmonitoring-webdevelopment-fullstackdevelopment-activity-7431386992585879552-_3jn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYO6LMBrgQDuQvb2f24Rx81y5rcdTGFKg0'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden group border border-border-subtle hover:border-primary/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-foreground/10 rounded-full hover:bg-foreground/20 transition-colors backdrop-blur-md">
                    <Github size={20} className="text-foreground" />
                  </a>
                  <a href={project.demo} className="p-3 bg-foreground/10 rounded-full hover:bg-foreground/20 transition-colors backdrop-blur-md">
                    <ExternalLink size={20} className="text-foreground" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                {Array.isArray(project.description) ? (
                  <ul className="opacity-70 text-sm mb-6 leading-relaxed list-none space-y-1">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="opacity-70 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-primary font-medium uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

