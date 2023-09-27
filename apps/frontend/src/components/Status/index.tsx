import styles from './styles.module.scss'

export type Status = 'ALL' | 'OPEN' | 'CLOSED'

interface StatusProps {
  onStatusChange: (status: Status) => void
}

export const Status = (props: StatusProps) => {
  const { onStatusChange } = props

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(event.target.value as Status)
  }

  return (
    <select className={styles.select} name="status" onChange={onChange}>
      <option value="ALL">All</option>
      <option value="OPEN">Open</option>
      <option value="CLOSED">Closed</option>
    </select>
  )
}
