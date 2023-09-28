/**
 * @todo
 * Add more tests - like
 * - status change
 * - pagination change
 * - alert created
 */
import { render, screen, fireEvent, act } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { useAlerts } from '../../hooks/useAlerts'
import { Alerts } from '.'

jest.mock('../../hooks/useAlerts')

const { lorem, string, date, helpers } = faker

const fakeAlerts = (amount) => {
  const statuses = ['OPEN', 'CLOSED']
  const alerts = []

  for (let i = 0; i < amount; i++) {
    alerts.push({
      id: string.uuid(),
      transactionId: string.uuid(),
      description: lorem.paragraph(),
      createdAt: date.anytime(),
      status: helpers.arrayElement(statuses),
    })
  }

  return alerts
}

describe('Alerts', () => {
  it('Should render', () => {
    useAlerts.mockImplementation(() => {
      const page = 1
      const totalPages = 10
      const alerts = fakeAlerts(10)
      const nextPage = jest.fn()
      const previousPage = jest.fn()
      const reFetch = jest.fn()

      return {
        alerts,
        page,
        nextPage,
        previousPage,
        totalPages,
        reFetch,
      }
    })

    render(<Alerts />)

    expect(screen.getByRole('article')).toBeDefined()
  })

  it('Should update list on search change', (done) => {
    const alerts = fakeAlerts(10)
    const page = 1
    const totalPages = 10
    const nextPage = jest.fn()
    const previousPage = jest.fn()
    const reFetch = jest.fn()

    useAlerts.mockImplementation(() => {
      return {
        alerts,
        page,
        nextPage,
        previousPage,
        totalPages,
        reFetch,
      }
    })

    render(<Alerts />)

    const search = alerts[0].description.substring(0, 3)
    const filteredAlerts = alerts.filter((alert) => alert.description.toLowerCase().indexOf(search.toLowerCase()) > -1)

    act(() => {
      fireEvent.change(screen.getByRole('searchbox'), { target: { value: search } })
    })

    setTimeout(() => {
      useAlerts.mockImplementation(() => {
        return {
          alerts: filteredAlerts,
          page,
          nextPage,
          previousPage,
          totalPages,
          reFetch,
        }
      })

      filteredAlerts.forEach((alert) => {
        expect(screen.getByText(alert.description)).toBeDefined()
      })
      done()
    }, 700)
  })
})
