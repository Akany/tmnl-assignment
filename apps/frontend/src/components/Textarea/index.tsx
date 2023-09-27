import classnames from 'classnames'

import styles from './styles.module.scss'

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { className, ...rest } = props

  return (
    <textarea className={classnames(className, styles.textarea)} {...rest} />
  )
}