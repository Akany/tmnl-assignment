/**
 * Have no time for input validation
 *
 * @todo
 * Add input validation + loading state
 */
import { useState } from 'react'
import classnames from 'classnames'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { postAlert } from '../../services/alerts'

import styles from './styles.module.scss'

interface AlertProps {
  onCreated: () => void
}

export const Alert = (props: AlertProps) => {
  const { onCreated } = props

  const [transactionId, setTransactionId] = useState('')
  const [description, setDescription] = useState('')

  const onTransactionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(event.target.value)
  }

  const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await postAlert({
      transactionId,
      description,
    })

    onCreated()
  }

  return (
    <article className={styles.article}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.row}>
          <Input className={styles.input} type="text" placeholder="Transaction Id" onChange={onTransactionChange} />
        </div>
        <div className={styles.row}>
          <Textarea className={styles.textarea} placeholder="Description" rows={6} onChange={onDescriptionChange} />
        </div>
        <div className={classnames(styles.row, styles.action)}>
          <Button>Create</Button>
        </div>
      </form>
    </article>
  )
}
