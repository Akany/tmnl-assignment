import classnames from 'classnames'

import styles from './styles.module.scss'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props

  return (
    <input className={classnames(className, styles.input)} {...rest} />
  )
}