import { Github, Linkedin, Code2 } from 'lucide-react'

const Footer = () => {
    return (
      <footer className="py-12 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">
              Shristhi.
            </div>
            
            <p className="text-sm opacity-50">
              © {new Date().getFullYear()} Shristhi Sethi. All rights reserved.
            </p>
  
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm opacity-50 mr-4 border-r border-white/10 pr-6">
                <a href="#about" className="hover:text-primary-light transition-colors">About</a>
                <a href="#projects" className="hover:text-primary-light transition-colors">Projects</a>
                <a href="#contact" className="hover:text-primary-light transition-colors">Contact</a>
              </div>
              <div className="flex gap-4 opacity-50">
                <a href="https://github.com/shri9461" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/shristhi-sethi-043772289/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/shri490/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
