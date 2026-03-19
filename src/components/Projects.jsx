import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import marksAnalyzerImg from '../assets/marks_analyzer.png'
import netMonImg from '../assets/netMon.png'

const Projects = () => {
  const projects = [
    {
      title: 'Student Marks Analyzer',
      description: 'Built a simple program that Analyzer student marks using functions, arrays, pointers, sorting, and basic DSA concepts to generate meaningful results.',
      tech: ['C++', 'DSA', 'Algorithms'],
      image: marksAnalyzerImg,
      github: 'https://github.com/shri9461/studentMarksanalayzer',
      demo: 'https://www.linkedin.com/posts/shristhi-sethi-043772289_cplusplus-dsa-coding-activity-7348651171277914115-_nfc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYO6LMBrgQDuQvb2f24Rx81y5rcdTGFKg0'
    },
    {
      title: 'Caption Website',
      description: 'Develop a real-time closed captioning solution with simplified captions in multiple Indian languages for accessibility and inclusivity.',
      tech: ['ReactJS', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', // Tech/accessibility image
      github: 'https://github.com/shri9461/Captioning',
      demo: 'https://www.linkedin.com/posts/shristhi-sethi-043772289_reactjs-nodejs-tailwindcss-activity-7411663072932573184-lABo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYO6LMBrgQDuQvb2f24Rx81y5rcdTGFKg0'
    },
    {
      title: 'Online Furniture Store',
      description: 'To design and develop a functional online furniture shopping platform where users can browse products, view details, and manage their cart.',
      tech: ['HTML', 'CSS', 'Tailwind CSS', 'PHP'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', // Furniture/Ecommerce image
      github: '',
      demo: 'https://surl.lu/usxvty'
    },
    {
      title: 'NetMon - Network Dashboard',
      description: 'I designed and developed a full-stack web application that helps monitor network activity, track device status, and visualize performance metrics in real time.',
      tech: ['ReactJS', 'Node.js', 'Python'],
      image: netMonImg,
      github: 'https://github.com/shri9461/NetMon',
      demo: 'https://www.linkedin.com/posts/shristhi-sethi-043772289_networkmonitoring-webdevelopment-fullstackdevelopment-activity-7431386992585879552-_3jn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYO6LMBrgQDuQvb2f24Rx81y5rcdTGFKg0'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-white/5">
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
              className="glass rounded-3xl overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="opacity-70 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
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

