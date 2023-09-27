import React from 'react'
import classnames from 'classnames'
import { useAlerts } from '../../hooks/useAlerts'
import styles from './styles.module.scss'

export function AlertsList() {
  const {
    alerts,
    page,
    isNext,
    nextPage,
    isPrevious,
    previousPage
  } = useAlerts()

  console.log('alerts', alerts)

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
    <section>
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
      <button onClick={previousPage} disabled={!isPrevious}>Previous</button>
      {page}
      <button onClick={nextPage} disabled={!isNext}>Next</button>
    </section>
  )
}
