import { NewAlert } from '../NewAlert'
import { Search } from '../Search'
import { Status } from '../Status'

import styles from './styles.module.scss'

interface ToolbarProps {
  onSearch: (search: string) => void
  onStatus: (status: Status) => void
  onCreated: () => void
}

export const Toolbar = (props: ToolbarProps) => {
  const { onSearch, onStatus, onCreated } = props

  return (
    <section className={styles.section}>
      <NewAlert onCreated={onCreated} />
      <Search onSearchChange={onSearch} />
      <Status onStatusChange={onStatus} />
    </section>
  )
}
