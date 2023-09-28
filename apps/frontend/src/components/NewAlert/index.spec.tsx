import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { NewAlert } from '.'

jest.mock('../../services/alerts', () => {
  return {
    postAlert: () => new Promise((resolve) => resolve(true))
  }
})

describe('NewAlert', () => {
  afterEach(cleanup)
  it('Should render button', () => {
    render(<NewAlert onCreated={jest.fn()}/>)

    expect(screen.getByRole('button', { name: 'New Alert' })).toBeDefined()
  })

  it('Should show modal on press', () => {
    render(<NewAlert onCreated={jest.fn()}/>)

    fireEvent.click(screen.getByRole('button', { name: 'New Alert' }))

    expect(screen.getByRole('dialog')).toBeDefined()
    fireEvent.click(screen.getByRole('button', { name: 'close' }))
  })

  it('Should render new alert form', () => {
    render(<NewAlert onCreated={jest.fn()}/>)

    fireEvent.click(screen.getByRole('button', { name: 'New Alert' }))

    expect(screen.getByRole('form', { name: 'new alert' })).toBeDefined()
    fireEvent.click(screen.getByRole('button', { name: 'close' }))
  })
})