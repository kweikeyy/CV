import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Skills.module.css'

const skillSet = [
    { name: 'HTML', level: 95, description: 'Used for structuring web pages and content.' },
    { name: 'CSS', level: 90, description: 'Used for styling websites and creating responsive layouts.' },
    { name: 'JavaScript', level: 90, description: 'Used for adding interactivity and logic to web applications.' },
    { name: 'React', level: 85, description: 'Used for building dynamic user interfaces and SPAs.' },
    { name: 'PHP', level: 90, description: 'Used for backend development and server-side rendering.' }
]

function Skills() {
    const [visible, setVisible] = useState(false)
    const [hovered, setHovered] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setVisible(true)
            })
        })
        const section = document.getElementById('skills')
        if (section) observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section alt" id="skills">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Skills
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className={styles.hint}
            >
                Hover over a skill name to learn more
            </motion.p>

            <div className={styles.skillsList}>
                {skillSet.map((s, i) => (
                    <div key={i} className={styles.skill}>
                        <div
                            className={styles.skillHeader}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <span className={styles.skillName}>{s.name}</span>
                            {hovered === i && (
                                <motion.div
                                    className={styles.tooltip}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {s.description}
                                </motion.div>
                            )}
                        </div>

                        <div className={styles.bar}>
                            <motion.div
                                className={styles.fill}
                                initial={{ width: 0 }}
                                animate={{ width: visible ? `${s.level}%` : 0 }}
                                transition={{ duration: 1.2, delay: i * 0.25, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
