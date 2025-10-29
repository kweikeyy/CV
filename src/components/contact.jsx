import React from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

function Contact() {
    const username = 'TBOY_KOLLIMAP'
    const message = "Hi, I saw your CV and would like to talk personally."
    const encoded = encodeURIComponent(message)
    const tgDeep = `tg://resolve?domain=${username}&text=${encoded}`
    const webLink = `https://t.me/${username}?text=${encoded}`

    const openTelegram = (e) => {
        e.preventDefault()
        const timeout = setTimeout(() => {
            window.location.href = webLink
        }, 600)
        window.location.href = tgDeep
        setTimeout(() => clearTimeout(timeout), 1000)
    }

    return (
        <section className="section" id="contact">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Contact Me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p>To contact me in Telegram click this button:</p>
                <a
                    href={webLink}
                    onClick={openTelegram}
                    className={styles.link}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    @TBOY_KOLLIMAP
                </a>
            </motion.div>
        </section>
    )
}

export default Contact