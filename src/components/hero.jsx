import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.hero}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>MZFQW</h1>
                <h2>Backend</h2>
                <p>Your ideas, my code — real results.</p>
            </motion.div>
        </section>
    )
}

export default Hero
