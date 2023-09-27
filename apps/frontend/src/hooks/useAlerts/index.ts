import { useState, useEffect } from 'react'
import { getAlerts, Alert, Meta } from '../../services/alerts'
import { Status } from '../../components/Status'

const limit: Meta['itemsPerPage'] = 10

export const useAlerts = (search: string, status: Status) => {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [meta, setMeta] = useState<Meta>({
    currentPage: 1,
    itemCount: 0,
    itemsPerPage: limit,
    totalItems: 0,
    totalPages: 0,
  })

  useEffect(() => {
    fetchAlerts(meta.currentPage, status)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const fetchAlerts = async (page: Meta['currentPage'], status: Status) => {
    const { items, meta } = await getAlerts(page, limit, status)

    setAlerts(items)
    setMeta(meta)
  }

  const nextPage = () => {
    fetchAlerts(meta.currentPage + 1, status)
  }

  const previousPage = () => {
    fetchAlerts(meta.currentPage - 1, status)
  }

  /**
   * Backend does not have search api
   * Implementing sorting of a current page
   *
   * @TODO
   * Search should be implemented on a backend.
   */
  const filteredAlerts = search ? alerts
    .filter((alert) => {
      const { transactionId, description } = alert

      return transactionId.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
    }) : alerts

  return {
    alerts: filteredAlerts,
    page: meta.currentPage,
    totalPages: meta.totalPages,
    isNext: meta.currentPage < meta.totalPages,
    nextPage,
    isPrevious: meta.currentPage > 1,
    previousPage,
  }
}
