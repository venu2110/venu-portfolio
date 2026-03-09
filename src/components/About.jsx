import { motion } from 'framer-motion'

const anim = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, viewport: { once: true, margin: "-50px" } }

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-10 lg:py-16 flex justify-between gap-8 flex-col lg:flex-row" id="about">
      <motion.div className="lg:w-1/2" {...anim} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
        <img src="/assets/about-me.svg" alt="About Me" />
      </motion.div>
      <motion.div className="lg:w-1/2" {...anim} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
        <h2 className="lg:text-3xl text-2xl mt-4 lg:mt-0 font-light">About <span className="font-medium">Me</span></h2>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10 font-light">I'm a Software Developer with hands-on experience in C/C++, Java, JavaScript, and cloud platforms like AWS, Kubernetes, and OpenStack. I build tools and web applications focused on reliability, usability, and performance.</p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5 font-light">Recent projects include a full-featured handicraft marketplace and an automated lock cycle detector for multithreaded applications. I enjoy tackling complex problems and delivering practical, well-tested solutions.</p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5 font-light">Outside of code, I stay active in the developer community, learning new technologies, and sharpening my skills through certifications and hands-on challenges.</p>
      </motion.div>
    </div>
  )
}
