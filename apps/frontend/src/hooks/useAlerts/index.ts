import { useState, useEffect } from 'react'
import { getAlerts, Alert, Meta } from '../../services/alerts'

const limit: Meta['itemsPerPage'] = 10

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [meta, setMeta] = useState<Meta>({
    currentPage: 1,
    itemCount: 0,
    itemsPerPage: limit,
    totalItems: 0,
    totalPages: 0,
  })

  useEffect(() => {
    fetchAlerts(meta.currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchAlerts = async (page: Meta['currentPage']) => {
    const { items, meta } = await getAlerts(page, limit)

    setAlerts(items)
    setMeta(meta)
  }

  const nextPage = () => {
    fetchAlerts(meta.currentPage + 1)
  }

  const previousPage = () => {
    fetchAlerts(meta.currentPage - 1)
  }

  return {
    alerts,
    page: meta.currentPage,
    isNext: meta.currentPage < meta.totalPages,
    nextPage,
    isPrevious: meta.currentPage > 1,
    previousPage,
  }
}
