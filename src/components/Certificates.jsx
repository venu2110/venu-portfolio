import { motion } from "framer-motion"
import { BsAward } from "react-icons/bs"

const certificates = [
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    link: "https://www.freecodecamp.org/certification/venu2110/responsive-web-design",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    link: "https://www.coursera.org/learn/computer-networking",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    date: "Nov 2024",
    link: "https://www.coursera.org/specializations/computer-communications",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte / Forage",
    date: "Jul 2025",
    link: "https://www.theforage.com/",
  },
]

export default function Certificates() {
  return (
    <div className="px-5 lg:px-28 py-12" id="certificates">
      <motion.h2 className="text-2xl lg:text-3xl text-center font-light" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} viewport={{ once: true }}>
        My <span className="font-medium">Certificates</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {certificates.map((cert) => (
          <motion.a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="group bg-white border border-black/10 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-black">
                <BsAward className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">{cert.title}</p>
                <p className="text-xs text-black/50">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            <p className="text-sm text-black/70 font-light">View Certificate</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
