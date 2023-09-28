import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

import styles from './styles.module.scss'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  title: string
}

export const Modal = (props: ModalProps) => {
  const { children, onClose, title } = props

  return (
    <main className={styles.main} role="dialog">
      <section className={styles.section}>
        <nav className={styles.nav}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.close} onClick={onClose} aria-label="close">
            <CloseIcon />
          </button>
        </nav>
        <div>{children}</div>
      </section>
    </main>
  )
}
