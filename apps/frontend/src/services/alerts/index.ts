import axios from 'axios'

export interface Alert {
  id: string
  transactionId: string
  description: string
  createdAt: Date
  status: 'OPEN' | 'CLOSED'
}

export interface Meta {
  currentPage: number
  itemCount: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

interface GetAlertsResponse {
  items: Alert[]
  meta: Meta
}

export const getAlerts = async (page: Meta['currentPage'], limit: Meta['itemsPerPage']): Promise<GetAlertsResponse> => {
  const { data } = await axios.get<GetAlertsResponse>('/api/alerts', {
    params: {
      page,
      limit,
    },
  })

  return data
}
