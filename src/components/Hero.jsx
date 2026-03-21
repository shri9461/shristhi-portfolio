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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-foreground/50 font-display"
            >
              Full Stack Web Developer
            </motion.p>

            <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tight font-display uppercase ">
              Shristhi <br />
              <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">Sethi</span>
            </h1>

            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-xl leading-relaxed">
              Focused on building scalable, end-to-end web applications with modern technologies and a commitment to clean, efficient, and user-centric technical excellence.
            </p>

            <div className="flex flex-wrap gap-6 items-center mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground text-background rounded-full font-bold flex items-center gap-3 shadow-2xl hover:shadow-primary/20 transition-all"
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-foreground/20 rounded-full font-bold flex items-center gap-3 hover:bg-foreground/5 transition-all"
              >
                Resume <Download size={20} />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6 pl-2"
            >
              {[
                { icon: <Github size={24} />, href: "https://github.com/shri9461" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shristhi-sethi-043772289/" },
                { icon: <Code2 size={24} />, href: "https://leetcode.com/u/shri490/" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Geometric Background Shape */}
              <motion.div
                animate={{ rotate: [45, 50, 45] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[80%] h-[80%] bg-[#fbbf24] rounded-[4rem] md:rounded-[6rem] shadow-[0_0_60px_rgba(251,191,36,0.2)]"
              />

              {/* Photo masking/frame matching the Julia Styles look */}
              <div className="relative z-10 w-[85%] h-[85%] overflow-visible flex items-center justify-center">
                <img
                  src="/shristhi_profile.jpg"
                  alt="Shristhi Sethi"
                  className="w-full h-full object-cover rounded-3xl md:rounded-[4rem] relative z-20"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Shristhi+Sethi&size=512&background=000000&color=fff';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
