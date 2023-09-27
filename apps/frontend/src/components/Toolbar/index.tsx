import { Search } from '../Search'
import { Status } from '../Status'

import styles from './styles.module.scss'

interface ToolbarProps {
  onSearch: (search: string) => void
  onStatus: (status: Status) => void
}

export const Toolbar = (props: ToolbarProps) => {
  const { onSearch, onStatus } = props

  return (
    <section className={styles.section}>
      <button>Crate</button>
      <Search onSearchChange={onSearch} />
      <Status onStatusChange={onStatus} />
    </section>
  )
}
