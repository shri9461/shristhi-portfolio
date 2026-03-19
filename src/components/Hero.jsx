import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Code2 } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Welcome to my space</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              I'm <span className="text-primary">Shristhi Sethi</span>
            </h1>
            <p className="text-xl opacity-80 mb-8 max-w-lg">
              Full Stack Web Developer & Computer Science Enthusiast. I build high-performance, beautiful, and accessible web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-background-light dark:text-background-dark rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/25"
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary/50 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/5 transition-colors"
              >
                Resume <Download size={20} />
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <a 
                href="https://github.com/shri9461" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shristhi-sethi-043772289/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/shri490/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
              >
                <Code2 size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
                <img 
                    src="/shristhi_profile.jpg" 
                    alt="Shristhi Sethi" 
                    className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-20 shadow-2xl"
                    onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=Shristhi+Sethi&size=512&background=000000&color=fff';
                    }}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
