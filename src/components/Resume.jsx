import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, ExternalLink, X, Maximize2 } from 'lucide-react'
import { jsPDF } from 'jspdf'
import resumeImg from '../assets/resume_img.png'

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadResume = async () => {
    setIsDownloading(true)
    try {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = resumeImg
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [img.width, img.height],
        })
        pdf.addImage(img, 'PNG', 0, 0, img.width, img.height)
        pdf.save('Shristhi_Sethi_Resume.pdf')
        setIsDownloading(false)
      }
      img.onerror = () => setIsDownloading(false)
    } catch {
      setIsDownloading(false)
    }
  }

  return (
    <section id="resume" className="py-24 bg-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-primary-light mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={downloadResume}
              disabled={isDownloading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-light text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Download size={20} />
              {isDownloading ? 'Generating PDF...' : 'Download PDF'}
            </motion.button>
            <motion.a
              href="https://linkedin.com/in/shristhi-sethi-043772289/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              <ExternalLink size={20} />
              LinkedIn Profile
            </motion.a>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => setIsModalOpen(true)}
                className="glass p-3 md:p-6 rounded-[2rem] border border-white/10 relative overflow-hidden group shadow-2xl cursor-pointer max-w-sm w-full"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 aspect-[3/4]">
                    <img 
                        src={resumeImg} 
                        alt="Shristhi Sethi Resume Preview" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="p-4 bg-primary-light text-black rounded-full shadow-xl">
                                <Maximize2 size={24} />
                            </div>
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Click to Expand</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Modal View */}
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl bg-black/80"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative max-w-5xl w-full h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 glass">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <FileText className="text-primary-light" />
                                Resume Dashboard
                            </h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-auto p-4 md:p-8 bg-black/20 custom-scrollbar">
                            <img 
                                src={resumeImg} 
                                alt="Shristhi Sethi Full Resume" 
                                className="w-full h-auto rounded-xl shadow-2xl mx-auto max-w-4xl"
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-white/10 flex justify-center gap-4 glass">
                            <button
                                onClick={downloadResume}
                                disabled={isDownloading}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-light text-black font-bold rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Download size={20} />
                                {isDownloading ? 'Generating...' : 'Download PDF'}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Resume
