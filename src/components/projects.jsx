import React from 'react'
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

const projects = [
    { name: 'Websites 🌐', description: 'Web sites as shops, statistics, log panel like LummaLogs.' },
    { name: 'Brute scripts ⚡', description: 'Script that brute-force any account, wallet etc.' },
    { name: 'Cookie Shop 🍪', description: 'Cookie checker, TG shop, fresher and more...' }
]

function Projects() {
    return (
        <section className="section" id="projects">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Projects
            </motion.h2>
            <div className={styles.projects}>
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className={styles.project}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
