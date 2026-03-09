import { motion } from "framer-motion"
import { FaJs, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiCplusplus, SiMysql, SiAmazon, SiKubernetes, SiTerraform } from "react-icons/si"

const skills = [
  { name: "C/C++", icon: <SiCplusplus size={50} /> },
  { name: "Java", icon: <FaJava size={50} /> },
  { name: "JavaScript", icon: <FaJs size={50} /> },
  { name: "HTML/CSS", icon: <FaHtml5 size={50} /> },
  { name: "MySQL", icon: <SiMysql size={50} /> },
  { name: "AWS", icon: <SiAmazon size={50} /> },
  { name: "Docker", icon: <FaDocker size={50} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} /> },
  { name: "Terraform", icon: <SiTerraform size={50} /> },
  { name: "Git", icon: <FaGitAlt size={50} /> },
]

export default function Skills() {
  return (
    <div className="mt-3 lg:mt-16 pb-10 lg:pb-16 px-5 lg:px-28" id="skills">
      <motion.h2 className="text-2xl lg:text-3xl text-center font-light" initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} viewport={{ once: true }}>
        My <span className="font-medium">Skills</span>
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-base font-normal mt-7 lg:mt-16 place-items-center gap-y-6 lg:gap-y-12">
        {skills.map((skill, i) => (
          <motion.div key={skill.name} className="bg-white border hover:bg-black hover:text-white transition-all duration-300 cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }} viewport={{ once: true, margin: "-30px" }}>
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
