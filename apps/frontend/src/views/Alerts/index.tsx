import { useState } from 'react'
import { useAlerts } from '../../hooks/useAlerts'
import { Toolbar } from '../../components/Toolbar'
import { AlertsList } from '../../components/AlertsList'
import { Pagination } from '../../components/Pagination'
import { Status } from '../../components/Status'

import styles from './styles.module.scss'

export const Alerts = () => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<Status>('ALL')
  const { alerts, page, nextPage, previousPage, totalPages } = useAlerts(search, status)

  const onSearchChange = (value: string) => {
    setSearch(value)
  }

  console.log(status);

  return (
    <article>
      <Toolbar onSearch={onSearchChange} onStatus={setStatus}/>
      <h1 className={styles.title}>Alerts</h1>
      <AlertsList className={styles['alerts-list']} alerts={alerts}/>
      <Pagination page={page} totalPages={totalPages} goNext={nextPage} goPrevious={previousPage}/>
    </article>
  )
}
