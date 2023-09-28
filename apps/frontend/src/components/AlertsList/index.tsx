import React from 'react'
import classnames from 'classnames'
import { Alert } from '../../services/alerts'
import styles from './styles.module.scss'

interface AlertsListProps {
  className?: string
  alerts: Alert[]
}

export function AlertsList(props: AlertsListProps) {
  const { className, alerts } = props

  const rows = alerts.map((alert) => {
    const { id, transactionId, description } = alert

    return (
      <tr key={id}>
        <td className={classnames(styles.cell, styles.id)}>{id}</td>
        <td className={classnames(styles.cell, styles['transaction-id'])}>{transactionId}</td>
        <td className={styles.cell}>{description}</td>
      </tr>
    )
  })

  return (
    <section className={className}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.cell}>Id</th>
            <th className={styles.cell}>Transaction Id</th>
            <th className={styles.cell}>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </section>
  )
}
