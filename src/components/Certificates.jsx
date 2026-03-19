import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import cloudComputingCert from '../assets/cloud_computing_cert.png'
import binaryBlitzCert from '../assets/binary_blitz_cert.png'
import freecodecampCert from '../assets/freecodecamp_cert.png'
import cppDsCert from '../assets/cpp_ds_cert.png'
import simplilearnCert from '../assets/simplilearn_cert.png'
import csePathshalaCert from '../assets/cse_pathshala_cert.png'

const Certificates = () => {
  const certificates = [
    {
      title: 'Fundamental of Data Structure using C++',
      issuer: 'Lovely Professional University',
      date: 'July 2025',
      link: 'https://media.licdn.com/dms/image/v2/D5622AQGV-m4TNq9aaw/feedshare-shrink_800/B56ZrLuFLHJ8Ag-/0/1764354448100?e=1775088000&v=beta&t=5smzj9-xyz35NrpcRyEA7BNay-6EDvIj15RIqcQj9sU',
      image: cppDsCert,
      icon: <Award className="text-secondary" size={24} />
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'Oct 2025',
      link: 'https://media.licdn.com/dms/image/v2/D5622AQFPHPEu-3X96Q/feedshare-shrink_800/B56Zq2zgdtIsAg-/0/1764003548034?e=1775088000&v=beta&t=PBi6u9EjLHJ6wIvXNypBjIXVKFgZS7QALD-SD3M-uNI',
      image: cloudComputingCert,
      icon: <Award className="text-secondary" size={24} />
    },
    {
      title: 'Web Hackathon - Binary Blitz',
      issuer: 'Binary Blitz',
      date: 'March 2025',
      link: 'https://media.licdn.com/dms/image/v2/D5622AQG6Qna-2oQM_g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717593061513?e=1775088000&v=beta&t=5IsoaL_LfXEUWxj6pjFAIMZYzvGfkbQtnCk2A__DAJE',
      image: binaryBlitzCert,
      icon: <Award className="text-secondary" size={24} />
    },
    {
      title: 'Mastering in C: Basic to Beyond',
      issuer: 'CSE Pathshala',
      date: 'March 2024',
      link: 'https://media.licdn.com/dms/image/v2/D5622AQHVmeRgMmjp4A/feedshare-shrink_800/feedshare-shrink_800/0/1711677940760?e=1775088000&v=beta&t=P493WDdsyxzvTwlfr5tw14ntsAOe6rKs6rotlCQ5UQ8',
      image: csePathshalaCert,
      icon: <Award className="text-secondary" size={24} />
    },
    {
      title: 'Introduction to Big Data Tools for Beginners',
      issuer: 'Simlilearn',
      date: 'Feb 2024',
      link: 'https://www.simplilearn.com/big-data-tools-free-course-online-skillup',
      image: simplilearnCert,
      icon: <Award className="text-secondary" size={24} />
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodecamp',
      date: 'Oct 2023',
      link: 'https://www.freecodecamp.org/certification/123456-shristhi-sethi/responsive-web-design',
      image: freecodecampCert,
      icon: <Award className="text-secondary" size={24} />
    }
  ]

  return (
    <section id="certificates" className="py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Award size={40} className="text-foreground/80" />
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 inline-flex p-2 bg-foreground/5 rounded-xl border border-border-subtle">
                  {cert.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-foreground/60 font-medium mb-6">{cert.issuer}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/5">
                  <div className="flex items-center gap-2 text-sm text-foreground/40">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <a
                    href={cert.link}
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
