import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Instagram, Linkedin, Github, CheckCircle, AlertCircle, Code2 } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = 'c1d6fbc9-0930-4620-af25-61eeff307de5'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
            <p className="opacity-70 mb-8 max-w-md">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'shristhisethi724@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'India' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-foreground/10 md:bg-transparent rounded-xl flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase tracking-widest">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-sm opacity-50 mb-4 uppercase tracking-widest">Follow me</p>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/shri9461" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/shristhi-sethi-043772289/" },
                  { Icon: Code2, href: "https://leetcode.com/u/shri490/" },
                  { Icon: Instagram, href: "#" }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 glass rounded-xl hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-foreground/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-foreground/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-foreground/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-foreground/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {status.message && (
                <div className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full py-4 bg-primary text-background-light dark:text-background-dark rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
