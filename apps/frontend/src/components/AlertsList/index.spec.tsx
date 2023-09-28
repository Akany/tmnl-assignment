import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { AlertsList } from '.'

const { lorem, string, date, helpers } = faker

const fakeAlerts = (amount: number) => {
  const statuses: ['OPEN', 'CLOSED'] = ['OPEN', 'CLOSED']
  const alerts = []

  for (let i = 0; i < amount; i++) {
    alerts.push({
      id: string.uuid(),
      transactionId: string.uuid(),
      description: lorem.paragraph(),
      createdAt: date.anytime(),
      status: helpers.arrayElement(statuses)
    })
  }

  return alerts
}

describe('AlertsList', () => {
  it('Should render list', () => {
    render(<AlertsList alerts={fakeAlerts(5)}/>)

    const table = screen.getByRole('table')

    expect(table).toBeDefined()
  })

  it('Should render heading', () => {
    render(<AlertsList alerts={fakeAlerts(5)}/>)

    expect(screen.getByText('Id')).toBeDefined()
    expect(screen.getByText('Transaction Id')).toBeDefined()
    expect(screen.getByText('Description')).toBeDefined()
  })

  it('Should render table', () => {
    const alerts = fakeAlerts(5)

    render(<AlertsList alerts={alerts}/>)


    alerts.forEach((alert) => {
      expect(screen.getByText(alert.id)).toBeDefined()
    })
  })
})