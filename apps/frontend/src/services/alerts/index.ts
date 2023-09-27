import axios from 'axios'
import { Status } from '../../components/Status'

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

interface GetAlertsParams {
  page: Meta['currentPage']
  limit: Meta['itemsPerPage']
  filterStatus?: Omit<Status, 'ALL'>
}

export const getAlerts = async (
  page: Meta['currentPage'],
  limit: Meta['itemsPerPage'],
  filterStatus: Status
): Promise<GetAlertsResponse> => {
  const params: GetAlertsParams = {
    page,
    limit,
  }

  if (filterStatus !== 'ALL') {
    params.filterStatus = filterStatus
  }

  /**
   * @todo
   * Error handling should be added
   */
  const { data } = await axios.get<GetAlertsResponse>('/api/alerts', { params })

  return data
}

interface PostAlertProps {
  transactionId: string
  description: string
}

export const postAlert = async (props: PostAlertProps): Promise<void> => {
  const { transactionId, description } = props

  const payload = {
    transactionId,
    description,
    createdAt: new Date().toISOString(),
    status: 'OPEN',
  }

  /**
   * @todo
   * Error handling should be added
   */
  const { data } = await axios.post<void>('/api/alerts', payload)

  return data
}
