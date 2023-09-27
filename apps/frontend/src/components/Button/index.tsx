import styles from './styles.module.scss'

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, ...rest } = props

  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}
